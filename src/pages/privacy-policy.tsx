/* eslint-disable react/no-unescaped-entities */
import { ArrowCircleRight } from 'iconsax-react'
import Link from 'next/link'

import { Footer, Header } from '@/components/templates/layout'

export default function PrivacyPolicy() {
  const navigation = [
    { name: 'Home', href: '/', current: false },
    { name: 'Terms & Conditions', href: '/terms-and-conditions', current: false },
    { name: 'Privacy Policy', href: '/privacy-policy', current: true },
  ]

  return (
    <div>
      <Header navigation={navigation} />
      <div className="bg-white px-6 pt-16 pb-32 lg:px-8">
        <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
          <p className="text-base font-semibold leading-7 text-secondary">Privacy Policy</p>
          <h1 className="mt-2 text-6xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Platsage
          </h1>
          <p className="mt-6 text-xl leading-8">
            This Privacy Policy explains how we collect, use, and disclose personal information in
            connection with our messaging application ("the App"). We respect your privacy and are
            committed to protecting your personal information. By using the App, you consent to our
            collection, use, and disclosure of your personal information as described in this
            Privacy Policy.
          </p>
          <div className="mt-10 max-w-2xl">
            <h2 className="mt-8 text-2xl font-bold tracking-tight text-gray-900">
              Information we collect
            </h2>
            <div className="space-y-4">
              <p>
                We collect personal information that you provide to us when you use the App, such as
                your name, email address, and phone number. We may also collect technical
                information about your device, such as IP address, device type, and operating
                system.
              </p>
              <p>
                We collect personal information about your clients that you provide to us when you
                use the App, such as their name, email address, phone number, and any other
                information you choose to provide about them. We may also collect information about
                their interactions with you through our App, such as chat logs, call recordings, and
                message history.
              </p>
              <p>
                In addition to personal information about your clients, we may collect technical
                information about their devices, such as IP address, device type, and operating
                system. We may also collect usage data about your clients' interactions with our
                App, such as the features they use, the time spent on the App, and their
                preferences.
              </p>
              <p>
                We use this information to provide and improve the App, personalize your clients'
                experience with the App, and communicate with you about your clients. We may also
                use this information to analyze and improve our products and services.
              </p>
              <p>
                We do not sell your clients' personal information to third parties. However, we may
                share their personal information with our service providers, such as cloud storage
                providers and analytics providers, to provide the App to you. We may also share
                their personal information with law enforcement authorities or other third parties
                if required by law or if we believe that disclosure is necessary to protect our
                rights or the rights of others.
              </p>
              <p>
                You are responsible for obtaining your clients' consent to collect, use, and
                disclose their personal information through our App. You should also have a privacy
                policy in place that explains how you collect, use, and disclose your clients'
                personal information, and you should provide a copy of this policy to your clients.
              </p>
            </div>
            <h2 className="mt-8 text-2xl font-bold tracking-tight text-gray-900">
              How We Use Your Information
            </h2>
            <p>
              We use the information we collect to provide and improve the App, personalize your
              experience with the App, and communicate with you about the App. Specifically, we may
              use your information to:
            </p>
            <ul role="list" className="mt-4 mb-4 max-w-xl space-y-4 text-gray-600">
              <li className="flex gap-x-3">
                <ArrowCircleRight
                  className="mt-1 h-5 w-5 flex-none text-secondary"
                  aria-hidden="true"
                />
                <span>Provide you with the services and features offered by the App</span>
              </li>
              <li className="flex gap-x-3">
                <ArrowCircleRight
                  className="mt-1 h-5 w-5 flex-none text-secondary"
                  aria-hidden="true"
                />
                <span>
                  Personalize your experience with the App and make recommendations based on your
                  usage patterns
                </span>
              </li>
              <li className="flex gap-x-3">
                <ArrowCircleRight
                  className="mt-1 h-5 w-5 flex-none text-secondary"
                  aria-hidden="true"
                />
                <span>
                  Communicate with you about the App, including updates, new features, and customer
                  support
                </span>
              </li>
              <li className="flex gap-x-3">
                <ArrowCircleRight
                  className="mt-1 h-5 w-5 flex-none text-secondary"
                  aria-hidden="true"
                />
                <span>
                  Analyze usage of the App to understand how users interact with our services and to
                  improve the App
                </span>
              </li>
              <li className="flex gap-x-3">
                <ArrowCircleRight
                  className="mt-1 h-5 w-5 flex-none text-secondary"
                  aria-hidden="true"
                />
                <span>Conduct research and development to improve our products and services</span>
              </li>
              <li className="flex gap-x-3">
                <ArrowCircleRight
                  className="mt-1 h-5 w-5 flex-none text-secondary"
                  aria-hidden="true"
                />
                <span>
                  Detect and prevent fraud, abuse, or other potentially illegal activities
                </span>
              </li>
              <li className="flex gap-x-3">
                <ArrowCircleRight
                  className="mt-1 h-5 w-5 flex-none text-secondary"
                  aria-hidden="true"
                />
                <span>Enforce our Terms of Service and other agreements</span>
              </li>
            </ul>
            <div className="space-y-4">
              <p>
                To analyze usage of the App, we may use analytics tools and third-party services.
                These tools and services may collect information about your use of the App,
                including your IP address, device type, and operating system, and may set cookies or
                similar technologies on your device to help us analyze usage patterns. We may use
                this information to improve the App and our services, such as by identifying popular
                features or improving the user interface.
              </p>
              <p>
                In addition to the above, we may use your information for any other purpose for
                which you have given us your consent, or as otherwise required or permitted by law.
              </p>
              <p>
                We do not sell your personal information to third parties. However, we may share
                your personal information with our service providers, such as cloud storage
                providers and analytics providers, to provide the App to you. We may also share your
                personal information with law enforcement authorities or other third parties if
                required by law or if we believe that disclosure is necessary to protect our rights
                or the rights of others.
              </p>
            </div>
            <h2 className="mt-8 text-2xl font-bold tracking-tight text-gray-900">
              How We Share Your Information
            </h2>
            <div className="space-y-4">
              <p>
                We do not sell your personal information to third parties. However, we may share
                your personal information with our service providers, such as cloud storage
                providers and analytics providers, to provide the App to you. We may also share your
                personal information with law enforcement authorities or other third parties if
                required by law or if we believe that disclosure is necessary to protect our rights
                or the rights of others.
              </p>
              <p>
                Meta Business Suite may share your personal information with third-party service
                providers that help us provide and maintain the App. For example, we may share your
                personal information with our cloud hosting provider, customer support provider, and
                analytics provider. These service providers are authorized to use your personal
                information only as necessary to provide services to us.
              </p>
              <p>
                We may also share your personal information with our affiliates, subsidiaries, and
                business partners to offer you related products or services. However, we will only
                share your personal information with these third parties if you have given us your
                consent to do so.
              </p>
              <p>
                In addition, we may share your personal information with law enforcement authorities
                or other third parties if required by law or if we believe that disclosure is
                necessary to protect our rights or the rights of others.
              </p>
              <p>
                If Meta Business Suite is involved in a merger, acquisition, or sale of all or a
                portion of its assets, your personal information may be transferred as part of that
                transaction. We will notify you of any such change in ownership or control of your
                personal information.
              </p>
              <p>
                Finally, we may share your personal information with third parties for other
                purposes, but only if you have given us your consent to do so.
              </p>
            </div>
            <h2 className="mt-8 text-2xl font-bold tracking-tight text-gray-900">
              Your Rights and Choices
            </h2>
            <p>
              You have the right to access, correct, and delete your personal information. You can
              also withdraw your consent to the use of your personal information for marketing
              purposes at any time. These rights include:
            </p>
            <ul role="list" className="mt-4 mb-4 max-w-xl space-y-4 text-gray-600">
              <li className="flex gap-x-3">
                <ArrowCircleRight
                  className="mt-1 h-5 w-5 flex-none text-secondary"
                  aria-hidden="true"
                />
                <span>
                  <strong className="font-semibold text-gray-900">Right to access.</strong> You have
                  the right to obtain confirmation as to whether or not personal data concerning you
                  is being processed, and to access the personal data and information about how it
                  is being processed.
                </span>
              </li>
              <li className="flex gap-x-3">
                <ArrowCircleRight
                  className="mt-1 h-5 w-5 flex-none text-secondary"
                  aria-hidden="true"
                />
                <span>
                  <strong className="font-semibold text-gray-900">Right to rectification.</strong>{' '}
                  You have the right to request the rectification of inaccurate personal data
                  concerning you and to have incomplete personal data completed.
                </span>
              </li>
              <li className="flex gap-x-3">
                <ArrowCircleRight
                  className="mt-1 h-5 w-5 flex-none text-secondary"
                  aria-hidden="true"
                />
                <span>
                  <strong className="font-semibold text-gray-900">Right to erasure.</strong> You
                  have the right to request the erasure of personal data concerning you, also known
                  as the right to be forgotten. This right is not absolute and only applies in
                  certain circumstances.
                </span>
              </li>
              <li className="flex gap-x-3">
                <ArrowCircleRight
                  className="mt-1 h-5 w-5 flex-none text-secondary"
                  aria-hidden="true"
                />
                <span>
                  <strong className="font-semibold text-gray-900">
                    Right to restrict processing.
                  </strong>
                  You have the right to request the restriction of processing of your personal data.
                  This right is not absolute and only applies in certain circumstances.
                </span>
              </li>
              <li className="flex gap-x-3">
                <ArrowCircleRight
                  className="mt-1 h-5 w-5 flex-none text-secondary"
                  aria-hidden="true"
                />
                <span>
                  <strong className="font-semibold text-gray-900">
                    Right to data portability.
                  </strong>
                  You have the right to receive the personal data concerning you which you have
                  provided to us, in a structured, commonly used, and machine-readable format and
                  have the right to transmit those data to another controller without hindrance from
                  us.
                </span>
              </li>
              <li className="flex gap-x-3">
                <ArrowCircleRight
                  className="mt-1 h-5 w-5 flex-none text-secondary"
                  aria-hidden="true"
                />
                <span>
                  <strong className="font-semibold text-gray-900">Right to object.</strong>
                  You have the right to object to the processing of your personal data for certain
                  purposes, such as direct marketing, scientific or historical research, or
                  statistical purposes.
                </span>
              </li>
            </ul>
            <div className="space-y-4">
              <p>
                If you wish to exercise any of these rights, please contact us using the contact
                information provided below. We will respond to your request within a reasonable time
                and in accordance with applicable data protection laws.
              </p>
              <p>
                In addition, you have the right to lodge a complaint with a supervisory authority,
                in particular in the EU Member State of your habitual residence, place of work, or
                place of the alleged infringement if you consider that the processing of your
                personal data infringes applicable data protection laws.
              </p>
              <p>
                Please note that we may need to verify your identity before responding to your
                request. Also, please be aware that in certain circumstances, we may not be able to
                fulfill your request, such as when there is a legal obligation to retain your
                personal data or when the personal data is necessary for the establishment,
                exercise, or defense of legal claims.
              </p>
              <p>
                Finally, you have the choice to opt-out of receiving marketing communications from
                us. You can do this by clicking the <i>"unsubscribe"</i> link in our emails or
                contacting us using the contact information provided below.
              </p>
            </div>
            <h2 className="mt-8 text-2xl font-bold tracking-tight text-gray-900">Data Security</h2>
            <div className="space-y-4">
              <p>
                We take the security of your personal information seriously and have implemented
                appropriate technical and organizational measures to protect your personal
                information against unauthorized access, disclosure, alteration, and destruction. We
                use industry-standard encryption technologies to encrypt sensitive information
                transmitted between your device and our servers, and we regularly monitor our
                systems for vulnerabilities and attacks.
              </p>
              <p>
                However, please note that no system can be completely secure and we cannot guarantee
                the security of your personal information. In the event of a data breach, we will
                promptly notify affected users in accordance with applicable laws.
              </p>
              <p>
                We also require our employees and third-party service providers who have access to
                your personal information to adhere to strict confidentiality obligations and
                undergo regular security training. We ensure that access to your personal
                information is restricted to those who need it for the purposes described in this
                Privacy Policy.
              </p>
              <p>
                We retain your personal information only for as long as necessary to fulfill the
                purposes for which it was collected, including to comply with legal, regulatory, or
                internal policy requirements. When your personal information is no longer necessary
                for these purposes, we securely delete or anonymize it.
              </p>
              <p>
                If you have reason to believe that your interaction with us is no longer secure (for
                example, if you feel that the security of your account has been compromised), please
                contact us immediately using the contact information provided below.
              </p>
            </div>
            <h2 className="mt-8 text-2xl font-bold tracking-tight text-gray-900">
              Children's Privacy
            </h2>
            <p>
              The App is not intended for use by children under the age of 13, and we do not
              knowingly collect personal information from children under the age of 13. If you are a
              parent or guardian and believe that your child has provided us with personal
              information, please contact us so that we can delete the information.
            </p>
            <h2 className="mt-8 text-2xl font-bold tracking-tight text-gray-900">
              Changes to this Privacy Policy
            </h2>
            <p>
              We encourage you to review this Privacy Policy regularly to stay informed of our
              privacy practices. We may update this Privacy Policy from time to time. If we make any
              material changes to the Privacy Policy, we will notify you by email or by posting a
              notice in the App.
            </p>
            <h2 className="mt-8 text-2xl font-bold tracking-tight text-gray-900">Contact Us</h2>
            <p>
              If you have any questions or concerns about this Privacy Policy or our privacy
              practices, please contact us at{' '}
              <Link href="malito:contact@platsage.com">contact@platsage.com</Link> .
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
/* eslint-enable */
