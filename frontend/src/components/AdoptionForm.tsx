import { Form, Field, Formik } from "formik";
import { ErrorMessage } from "formik";
import { FormValues } from "./types/adoption";
import country from "../data/countries.json";
import * as Yup from "yup";

const validationSchema = Yup.object({
  firstName: Yup.string().required("This field is required"),
  lastName: Yup.string().required("This field is required"),
  email: Yup.string()
    .email("Please enter a valid email address")
    .required("This field is required"),
  mobile: Yup.string().required("This field is required"),
  preferences: Yup.string().required("This Field is required"),
  age: Yup.number().required("This Field is required"),
  breed: Yup.string().required("This Field is required"),
  country: Yup.string().required("This Field is required"),
  petType: Yup.string().required("This Field is required"),
  size: Yup.string().required("This Field is required"),
  gender: Yup.string().required("This Field is required"),
});

const AdoptionForm: React.FC = () => {
  const FormFields: FormValues = {
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    preferences: "",
    age: 3,
    breed: "",
    country: "",
    petType: "",
    size: "",
    gender: "",
  };

  return (
    <Formik
      initialValues={FormFields}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
       <section className="py-10 px-4 max-w-4xl mx-auto">
        <h1 className="md:text-4xl text-2xl font-bold text-black text-center mb-7">
          Personal Information
        </h1>
        <Form className="grid md:grid-cols-2 grid-cols-1 gap-6 w-full overflow-hidden">
          <div className="flex flex-col">
            <label htmlFor="firstName" className="mb-2 font-medium">
              First Name
            </label>
            <Field
              id="firstName"
              name="firstName"
              placeholder="Enter First Name"
              type="text"
              className="p-2 border border-blue-600 rounded-md w-full"
            />
            <ErrorMessage
              name="firstName"
              component="div"
              className="text-red-600 mt-1"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="lastName" className="mb-2 font-medium">
              Last Name
            </label>
            <Field
              id="lastName"
              name="lastName"
              placeholder="Enter Last Name"
              type="text"
              className="p-2 border border-blue-600 rounded-md w-full"
            />
            <ErrorMessage
              name="lastName"
              component="div"
              className="text-red-600 mt-1"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="email" className="mb-2 font-medium">
              Email Address
            </label>
            <Field
              id="email"
              name="email"
              placeholder="Enter Email Address"
              type="email"
              className="p-2 border border-blue-600 rounded-md w-full"
            />
            <ErrorMessage
              name="email"
              component="div"
              className="text-red-600 mt-1"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="mobile" className="mb-2 font-medium">
              Mobile Number
            </label>
            <Field
              id="mobile"
              name="mobile"
              placeholder="Enter Mobile Number"
              type="string"
              className="p-2 border border-blue-600 rounded-md w-full"
            />
            <ErrorMessage
              name="mobile"
              component="div"
              className="text-red-600 mt-1"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="country" className="mb-2 font-medium">
              Country
            </label>
            <Field
              as="select"
              name="country"
              className="p-2 border border-blue-600 rounded-md w-full"
            >
              <option value="">Please select a country</option>
              {country.countries.map((countryName) => (
                <option value={countryName} key={countryName}>
                  {countryName}
                </option>
              ))}
            </Field>
            <ErrorMessage
              name="country"
              component="div"
              className="text-red-600 mt-1"
            />
          </div>
        </Form>

        <section className="py-20  max-w-4xl mx-auto">
        <h1 className="md:text-4xl text-2xl font-bold text-black text-center mb-7">
            Pet Details
          </h1>
          <Form className="grid md:grid-cols-2 grid-cols-1 gap-6 w-full overflow-hidden">
            <div className="flex flex-col">
              <label htmlFor="petType" className="mb-2 font-medium">
                Pet Type
              </label>
              <Field
                as="select"
                name="petType"
                className="p-2 border border-blue-600 rounded-md w-full"
              >
                <option value="">Please select Pet Type</option>
                <option value="dog">Dog</option>
                <option value="cat">Cat</option>
                <option value="rabbit">Rabbit</option>
              </Field>
              <ErrorMessage
                name="petType"
                component="div"
                className="text-red-600 mt-1"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="breed" className="mb-2 font-medium">
                Breed Type
              </label>
              <Field
                as="select"
                name="breed"
                className="p-2 border border-blue-600 rounded-md w-full"
              >
                <option value="">Please select Pet Breed Type</option>
                <option value="American Eskimo Dog">American Eskimo Dog</option>
                <option value="German Shepherd">German Shepherd</option>
                <option value="Golden Retriever">Golden Retriever</option>
                <option value="Persian">Persian</option>
                <option value="Bengal">Bengal</option>
                <option value="Mini Rex">Mini Rex</option>
                <option value="Lovebird">Lovebird</option>
              </Field>
              <ErrorMessage
                name="breed"
                component="div"
                className="text-red-600 mt-1"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="age" className="mb-2 font-medium">
                Age
              </label>
              <Field
                id="age"
                name="age"
                placeholder="Enter Age"
                type="number"
                className="p-2 border border-blue-600 rounded-md w-full"
              />
              <ErrorMessage
                name="age"
                component="div"
                className="text-red-600 mt-1"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="size" className="mb-2 font-medium">
                Size
              </label>
              <Field
                as="select"
                name="size"
                className="p-2 border border-blue-600 rounded-md w-full"
              >
                <option value="">Please select Size of Pet</option>
                <option value="small">Small</option>
                <option value="medium">Medium</option>
                <option value="large">Large</option>
              </Field>
              <ErrorMessage
                name="size"
                component="div"
                className="text-red-600 mt-1"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="gender" className="mb-2 font-medium">
                Gender
              </label>
              <Field
                as="select"
                name="gender"
                className="p-2 border border-blue-600 rounded-md w-full"
              >
                <option value="">Please select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </Field>
              <ErrorMessage
                name="gender"
                component="div"
                className="text-red-600 mt-1"
              />
            </div>

            <div className="flex flex-col md:col-span-2">
              <label htmlFor="preferences" className="mb-2 font-medium">
                Preferences
              </label>
              <Field
                as="textarea"
                name="preferences"
                rows="5"
                placeholder="Write any Pet preferences you want"
                className="p-2 border border-blue-600 rounded-md w-full"
              />
              <ErrorMessage
                name="preferences"
                component="div"
                className="text-red-600 mt-1"
              />
            </div>

            <div className="md:col-span-2 text-center">
              <button
                type="submit"
                className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
              >
                Submit
              </button>
            </div>
          </Form>
        </section>
      </section>
    </Formik>
  );
};

export default AdoptionForm;