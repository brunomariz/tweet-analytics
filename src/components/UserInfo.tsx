import React, { useState } from "react";

import {
  Formik,
  FormikHelpers,
  FormikProps,
  Form,
  Field,
  FieldProps,
} from "formik";

type Props = {};

interface FormValues {
  username: string;
}

type UserData = {
  username: string;
  createdAt: string;
  name: string;
  id: string;
};

const UserInfo = (props: Props) => {
  const initialValues: FormValues = { username: "" };

  const [data, setData] = useState<UserData>();

  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          const username = values.username;
          fetch(`http://localhost:5000/user/${username}`)
            .then((res) => res.json())
            .then((data) => {
              setData(data);
              console.log(data);
            })
            .catch((err) => console.log(err))
            .finally(() => {});
        }}
      >
        <Form>
          <h1>
            <label htmlFor="username">Search username</label>
          </h1>
          <div className="flex justify-between">
            <Field
              className="block w-auto p-1 m-1 bg-[#02300234] active:bg-[#02300234] selection:bg-[#02300285] target:bg-[#02300234] outline-none placeholder:text-[#02b00274]"
              id="username"
              name="username"
              placeholder="Cameron"
            />
            <button className="block m-1" type="submit">
              Submit
            </button>
          </div>
        </Form>
      </Formik>
      <h1 className="">Name: {data?.name}</h1>
      <h1 className="">User: {data?.username}</h1>
      <h1 className="">ID: {data?.id}</h1>
      <h1 className="">Created at: {data?.createdAt}</h1>
    </div>
  );
};

export default UserInfo;
