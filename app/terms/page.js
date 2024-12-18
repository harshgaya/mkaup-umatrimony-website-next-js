import Head from "next/head";

export default function TermsAndConditions() {
  return (
    <>
      <Head>
        <title>Terms and Conditions - Munnur Kapu Matrimony</title>
      </Head>
      <div className="bg-gray-50 min-h-screen px-6 py-12 md:px-20 lg:px-40">
        <div className="max-w-4xl mx-auto bg-white p-8 shadow-md rounded-lg">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">
            Terms and Conditions
          </h1>

          <p className="text-gray-600 mb-4">
            Welcome to Munnur Kapu Matrimony. By accessing or using our website,
            you agree to comply with and be bound by the following terms and
            conditions. Please read these terms carefully.
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
            1. User Eligibility
          </h2>
          <p className="text-gray-600 mb-4">
            You must be 18 years or older to register and use our services. By
            registering, you confirm that all information provided by you is
            accurate and truthful.
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
            2. Account Responsibility
          </h2>
          <p className="text-gray-600 mb-4">
            You are solely responsible for maintaining the confidentiality of
            your account and password. Any activity conducted under your account
            is your responsibility.
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
            3. Prohibited Activities
          </h2>
          <p className="text-gray-600 mb-4">
            Users are prohibited from engaging in activities such as spamming,
            harassing, or posting offensive content. Violation of these terms
            may result in account suspension or termination.
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
            4. Content Ownership
          </h2>
          <p className="text-gray-600 mb-4">
            All content on this website, including text, images, and logos, is
            the property of Munnur Kapu Matrimony. Unauthorized use or
            reproduction is strictly prohibited.
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
            5. Limitation of Liability
          </h2>
          <p className="text-gray-600 mb-4">
            Munnur Kapu Matrimony is not liable for any damages arising from the
            use of this website or the services provided. Users engage in
            matrimonial matches at their own discretion.
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
            6. Modifications
          </h2>
          <p className="text-gray-600 mb-4">
            We reserve the right to update these terms and conditions at any
            time. Continued use of the website constitutes acceptance of any
            changes.
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
            7. Termination
          </h2>
          <p className="text-gray-600 mb-4">
            Munnur Kapu Matrimony reserves the right to suspend or terminate
            accounts that violate these terms or engage in fraudulent
            activities.
          </p>

          <p className="text-gray-600 mt-8">
            For any questions regarding these terms, please contact us at
            support@munnurkapumatrimony.com.
          </p>

          <p className="text-gray-600 mt-8 italic">
            Last updated: December 2024
          </p>
        </div>
      </div>
    </>
  );
}
