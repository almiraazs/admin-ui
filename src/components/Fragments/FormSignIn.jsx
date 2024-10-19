import LabeledInput from "../Elements/LabeledInput";4
import CheckBox from "../Elements/CheckBox";
import Button from "../Elements/Button";

const FromSignIn = () => {
    return (
        <form action="">
        <div className="mb-6">
            <LabeledInput
                label="Email address"
                type="email"
                placeholder="hello@example.com"
                name="email"
            />
        </div>
        <div className="mb-6">
            <LabeledInput
                label="Password"
                type="password"
                placeholder="*************"
                name="password"
            />
        </div>
        <div className="mb-3">
            <CheckBox label="Keep me signed in" name="status" />
        </div>
            <Button variant="bg-primary w-full text-white" type="submit" />
      </form>
    );
};

export default FromSignIn;