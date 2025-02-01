interface EmailTemplateProps {
  firstName: string;
  lastName?: string;
  email: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
  lastName,
  email,
  message,
}) => (
  <div>
    <div className="flex flex-col">
      <p>
        From {firstName} {lastName || ""}
      </p>
      <p>{email}</p>
    </div>
    <p>{message}</p>
  </div>
);
