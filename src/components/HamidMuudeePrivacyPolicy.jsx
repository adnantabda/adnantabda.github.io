import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-8 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
        {/* Header Section */}
        <div className="bg-black p-6 text-white">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <img 
              src="/hamidmuudeelogo.png" 
              alt="Hamid Muudee Plus Dictionary Logo" 
              className="w-20 h-20 rounded-lg shadow-md"
            />
            <div className="text-center md:text-left">
              <h1 className="text-3xl font-bold">Hamid Muudee Plus Dictionary</h1>
              <p className="text-blue-100 mt-2">Privacy Policy</p>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-6 md:p-8">
          <div className="prose max-w-none">
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
              <p className="text-yellow-700 font-medium">
                Last Updated: {new Date().toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </p>
            </div>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Introduction</h2>
              <p className="text-gray-600 mb-4">
                Welcome to Hamid Muudee Plus Dictionary ("we," "our," or "us"). We are committed to 
                protecting your privacy and being transparent about our practices. This Privacy Policy 
                explains how we handle information in relation to our dictionary application.
              </p>
              <p className="text-gray-600">
                Hamid Muudee Plus Dictionary is an offline-first English-Oromo dictionary application 
                that honors the legacy of Mahdi Hamid Muudee while expanding his foundational work with 
                modern vocabulary and technical terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Information We Do Not Collect</h2>
              <div className="bg-green-50 rounded-lg p-4 mb-4">
                <p className="text-green-700 font-semibold">
                  Hamid Muudee Plus Dictionary is designed with your privacy in mind. We do not collect, 
                  store, or process any personal information from our users.
                </p>
              </div>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>We do not collect personal identification information</li>
                <li>We do not collect device information</li>
                <li>We do not collect usage statistics or analytics</li>
                <li>We do not collect location data</li>
                <li>We do not require account creation or login</li>
                <li>We do not store search history or bookmarks on external servers</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Offline Functionality</h2>
              <p className="text-gray-600 mb-4">
                The core functionality of Hamid Muudee Plus Dictionary works entirely offline. The 
                dictionary database containing 100,000+ entries is stored locally on your device and 
                does not require an internet connection for basic dictionary operations including:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
                <li>Word searches and definitions</li>
                <li>Root word and prefix searches</li>
                <li>Bookmarking words</li>
                <li>Viewing search history</li>
              </ul>
              <p className="text-gray-600">
                All dictionary data remains on your device and is never transmitted to our servers 
                or any third parties.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Advertising</h2>
              <div className="bg-blue-50 rounded-lg p-4 mb-4">
                <p className="text-blue-700">
                  When you are connected to the internet, the app may display advertisements through 
                  Google AdMob to support the development and maintenance of the application.
                </p>
              </div>
              <p className="text-gray-600 mb-4">
                Google AdMob may collect certain information as described in their privacy policy. 
                We have no control over and are not responsible for the privacy practices of Google 
                AdMob. We encourage you to review Google's Privacy Policy to understand how they 
                handle information.
              </p>
              <p className="text-gray-600">
                You can limit ad tracking through your device settings, though this may not eliminate 
                ads entirely.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Data Storage</h2>
              <p className="text-gray-600">
                Any data generated by your use of the app (such as bookmarks or search history) is 
                stored locally on your device. This data remains under your control and is not 
                synchronized with any external servers. Uninstalling the app will remove all locally 
                stored data.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Children's Privacy</h2>
              <p className="text-gray-600">
                Our app is suitable for users of all ages. Since we do not collect any personal 
                information, we are fully compliant with children's privacy protection regulations 
                including COPPA (Children's Online Privacy Protection Act).
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Changes to This Privacy Policy</h2>
              <p className="text-gray-600 mb-4">
                We may update our Privacy Policy from time to time. Thus, we advise you to review 
                this page periodically for any changes. We will notify you of any changes by posting 
                the new Privacy Policy on this page and updating the "Last Updated" date.
              </p>
              <p className="text-gray-600">
                Changes to this Privacy Policy are effective when they are posted on this page.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Contact Us</h2>
              <p className="text-gray-600 mb-4">
                If you have any questions or suggestions about our Privacy Policy, do not hesitate 
                to contact us through the contact information provided in the Google Play Store 
                listing for Hamid Muudee Plus Dictionary.
              </p>
            </section>

            <section className="mt-12 pt-6 border-t border-gray-200">
              <div className="text-center text-gray-500">
                <p>Hamid Muudee Plus Dictionary - Honoring the legacy, expanding the language</p>
                <p className="mt-2 text-sm">Built with respect for Oromo language and culture</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;