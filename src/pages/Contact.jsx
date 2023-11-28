import { Form, redirect, useNavigation } from 'react-router-dom';
import { toast } from 'react-toastify';

import Wrapper from '../assets/wrappers/Contact';
import { useGlobalContext } from '../context';

export const action = async ({ request }) => {
  const formData = await request.formData();
  const { name, lastName } = Object.fromEntries(formData);
  toast.success(
    `Dear ${name.toUpperCase()} ${lastName.toUpperCase()}, your message has been forwarded to our team!`
  );
  return redirect('/');
};

const Contact = () => {
  const { isDarkTheme } = useGlobalContext();

  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';

  return (
    <Wrapper>
      <Form className={isDarkTheme ? 'dark-theme' : 'form'} method="POST">
        <h2>contact us!</h2>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            required
            className="form-input"
          />
        </div>
        <div className="form-row">
          <label htmlFor="lastName" className="form-label">
            last name
          </label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            required
            className="form-input"
          />
        </div>
        <div className="form-row">
          <label htmlFor="email" className="form-label">
            email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            required
            className="form-input"
          />
        </div>
        <div className="form-row">
          <label htmlFor="message" className="form-label">
            message
          </label>
          <textarea
            name="message"
            id="message"
            required
            className="form-textarea"
          ></textarea>
        </div>
        <button type="submit" className="btn btn-block" disabled={isSubmitting}>
          {isSubmitting ? 'submitting' : 'submit'}
        </button>
      </Form>
    </Wrapper>
  );
};
export default Contact;
