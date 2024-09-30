// import type { PageServerLoad } from "./$types";
//
// import { rdr_to_login } from "$lib/server/utilities";
//
// export const load: PageServerLoad = async ({ cookies, locals }) => {
// 	await cookies.delete("token", { path: '/admin' });
//     console.log("Cookies deleted.");
//
// 	locals.loggedInAdmin = false;
//
// 	rdr_to_login();
// };
import { redirect } from "@sveltejs/kit";

export const actions = {
  default: async ({ cookies, locals }) => {
    try {
      console.log("Attempting to delete cookies...");

      await cookies.delete("token", { path: '/admin' });

      console.log("Cookies deleted.");

      throw redirect(302, "/login");  // Redirect to login
    } catch (error) {
      console.error("Error during logout:", error);
      throw error;  // Propagate the error to be handled by SvelteKit
    }
  }
};
