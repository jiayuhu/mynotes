import { Button } from "@/components/ui/button";

export default function RegistrationPage() {
  return (
    <>
      <h2>Register</h2>
      <form action="/api/auth/register" method="POST">
        <label>Email<input type="email" name="email" required/></label>
        <label>Password<input type="password" name="password" required /></label>        
        <Button type="submit">Register</Button>
      </form>
    </>
  );
}