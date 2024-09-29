import { redirect } from "@sveltejs/kit";

export const actions = {
  default: async ({ cookies, locals }) => {
    try {
      console.log("Attempting to delete cookies...");

      await cookies.delete("usersession", { path: '/' });
      await cookies.delete("token", { path: '/' });

      console.log("Cookies deleted.");

      locals.userId = null;  // Clear user session
      console.log("Cleared user session");

      throw redirect(302, "/login");  // Redirect to login
    } catch (error) {
      console.error("Error during logout:", error);
      throw error;  // Propagate the error to be handled by SvelteKit
    }
  }
};
