import { Field, Form, Formik } from "formik";
import React, { SetStateAction } from "react";
import { BACKEND_ROOT } from "../constants";
import { FetchingStatus } from "../routes/Analytics/Analytics";

// import { backendRoot } from "../constants";

type Props = {
  onData: Function;
  setFetchingStatus: React.Dispatch<SetStateAction<FetchingStatus>>;
};

interface FormValues {
  username: string;
}

const UserForm = (props: Props) => {
  const initialValues: FormValues = { username: "" };

  // const [data, setData] = useState<UserData>();

  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          const username = values.username;
          props.setFetchingStatus(FetchingStatus.pending);
          fetch(`${BACKEND_ROOT}/user/${username}`)
            .then((res) => res.json())
            .then((data) => {
              // setData(data);
              console.log(data);
              props.onData(data);
              props.setFetchingStatus(FetchingStatus.complete);
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
              className="block w-auto p-1 m-1 bg-[#02300234] active:bg-[#02300234] selection:bg-[#02300285] target:bg-[#02300234] hover:bg-[#02300234] outline-none placeholder:text-[#02b00274]"
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
    </div>
  );
};

export default UserForm;
