import { useForm } from "react-hook-form";
function ContactSection() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);
  return (
    <div className="max-w-screen-xl mx-auto p-2">
      <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800 md:p-8">
        <form
          className="flex flex-col items-center w-full"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex items-center justify-center gap-2 w-full">
            <input
              className="input input-bordered w-full "
              type="text"
              placeholder="Enter your Name"
              {...register("Name", { maxLength: 80 })}
              required
            />
            <input
              className="input input-bordered w-full "
              type="text"
              placeholder="Email"
              {...register("Email", { pattern: /^\S+@\S+$/i })}
              required
            />
          </div>

          <input
            className="input input-bordered w-full btn-primary"
            type="tel"
            placeholder="Mobile number"
            required
            {...register("Mobile number", {
              minLength: 6,
              maxLength: 12,
            })}
          />
          <textarea
            placeholder="Write your message here"
            className="textarea textarea-bordered textarea-lg w-full"
          ></textarea>
          <input type="submit" />
        </form>
      </div>
    </div>
  );
}

export default ContactSection;
