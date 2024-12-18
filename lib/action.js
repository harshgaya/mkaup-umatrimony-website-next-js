"use server";

function isInvalidText(text) {
  return !text || text.trim() === "";
}
export async function addData(prevState, formData) {
  const name = formData.get("title");
  const description = formData.get("description");
  const mobile = formData.get("mobile");
  console.log(name, description, mobile);

  if (
    isInvalidText(name) ||
    isInvalidText(description) ||
    isInvalidText(mobile)
  ) {
    return "Invalid input!";
  }
  const data = {
    name: name,
    mobileNumber: mobile,
    message: description,
  };
  //   try {
  //     const response = await fetch(
  //       "https://api.softplix.com/api/admin/addUserMessage",
  //       {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify(data),
  //       }
  //     );

  //     if (response.ok) {
  //     } else {
  //       return "Unable to send data.";
  //     }
  //   } catch (error) {
  //     return "Unable to send data.";
  //   }
  console.log(name, description, mobile);
}
