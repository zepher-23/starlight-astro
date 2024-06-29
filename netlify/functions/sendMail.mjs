

export default async function(req,context) {
  if (req.body === null) {
    return {
      statusCode: 400,
      body: JSON.stringify("Payload required"),
    };
  }
// console.log((req.body))
  const requestBody =await req.json()

  //automatically generated snippet from the email preview
  //sends a request to an email handler for a subscribed email
  await fetch(
    `${process.env.URL}/.netlify/functions/emails/contact`,
    {
      headers: {
        "netlify-emails-secret": process.env.NETLIFY_EMAILS_SECRET,
      },
      method: "POST",
      body: JSON.stringify({
        from: requestBody.sender,
        to: "30zepher@gmail.com",
        subject: "Welcome",
        parameters: {
          name: requestBody.name, 
          email: requestBody.email,
          message:requestBody.message
        },
      }),
    }
  );

  return new Response ("Email Sent! We will get back soon." , {status :200})
};


