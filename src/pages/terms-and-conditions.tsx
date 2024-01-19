/* eslint-disable react/no-unescaped-entities */
import { ArrowCircleRight } from 'iconsax-react'
import Link from 'next/link'

import { Footer, Header } from '@/components/templates/layout'

export default function TermsAndConditions() {
  const navigation = [
    { name: 'Home', href: '/', current: false },
    { name: 'Terms & Conditions', href: '/terms-and-conditions', current: true },
    { name: 'Privacy Policy', href: '/privacy-policy', current: false },
  ]

  return (
    <div>
      <Header navigation={navigation} />
      <div className="bg-white px-6 pt-16 pb-32 lg:px-8">
        <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
          <p className="text-base font-semibold leading-7 text-secondary">Terms & Conditions</p>
          <h1 className="mt-2 text-6xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Platsage
          </h1>
          <p className="mt-6 text-xl leading-8">
            Welcome to Platsage! These terms and conditions (“Terms”) govern your use of the
            Platsage application (“App”) and the services provided through the App, including
            messaging and other communication services (collectively, the “Services”). By using the
            App or the Services, you agree to be bound by these Terms.
          </p>
          <div className="mt-10 max-w-2xl">
            <h2 className="mt-8 text-2xl font-bold tracking-tight text-gray-900">
              Account Registration
            </h2>
            <p>
              To use our messaging application, you must register for an account. You must provide
              accurate and complete information when registering for an account. You are responsible
              for maintaining the confidentiality of your account information and for all activities
              that occur under your account. You are solely responsible for the activity that occurs
              on your account, and you must keep your account password secure.
            </p>
            <h2 className="mt-8 text-2xl font-bold tracking-tight text-gray-900">
              Use of the Application
            </h2>
            <p>
              You agree to use our messaging application only for lawful purposes and in accordance
              with these terms and conditions. You agree not to use our messaging application:
            </p>
            <ul role="list" className="mt-2 mb-2 max-w-xl space-y-4 text-gray-600">
              <li className="flex gap-x-3">
                <ArrowCircleRight
                  className="mt-1 h-5 w-5 flex-none text-secondary"
                  aria-hidden="true"
                />
                <span>
                  in any way that violates any applicable federal, state, local, or international
                  law or regulation;
                </span>
              </li>
              <li className="flex gap-x-3">
                <ArrowCircleRight
                  className="mt-1 h-5 w-5 flex-none text-secondary"
                  aria-hidden="true"
                />
                <span>
                  for the purpose of exploiting, harming, or attempting to exploit or harm minors in
                  any way by exposing them to inappropriate content, asking for personally
                  identifiable information, or otherwise;
                </span>
              </li>
              <li className="flex gap-x-3">
                <ArrowCircleRight
                  className="mt-1 h-5 w-5 flex-none text-secondary"
                  aria-hidden="true"
                />
                <span>
                  to transmit, or procure the sending of, any advertising or promotional material,
                  including any "junk mail," "chain letter," "spam," or any other similar
                  solicitation;
                </span>
              </li>
              <li className="flex gap-x-3">
                <ArrowCircleRight
                  className="mt-1 h-5 w-5 flex-none text-secondary"
                  aria-hidden="true"
                />
                <span>
                  to impersonate or attempt to impersonate our messaging application, a company
                  employee, another user, or any other person or entity;
                </span>
              </li>
              <li className="flex gap-x-3">
                <ArrowCircleRight
                  className="mt-1 h-5 w-5 flex-none text-secondary"
                  aria-hidden="true"
                />
                <span>
                  to engage in any other conduct that restricts or inhibits anyone's use or
                  enjoyment of the messaging application, or which, as determined by us, may harm
                  our company or users of the messaging application or expose them to liability.
                </span>
              </li>
            </ul>
            <h2 className="mt-8 text-2xl font-bold tracking-tight text-gray-900">Content</h2>
            <p>
              Our messaging application allows users to share content, including messages, photos,
              videos, and other types of media. You retain all rights to any content you submit,
              post, or display on or through our messaging application. You grant us a
              non-exclusive, royalty-free, transferable, sub-licensable, worldwide license to use,
              copy, modify, create derivative works based on, distribute, publicly display, publicly
              perform, and otherwise exploit in any manner such content in all formats and
              distribution channels now known or hereafter devised.
            </p>
            <h2 className="mt-8 text-2xl font-bold tracking-tight text-gray-900">
              Prohibited Content
            </h2>
            <p>You agree not to post, transmit, or otherwise make available any content that is:</p>
            <ul role="list" className="mt-2 mb-2 max-w-xl space-y-4 text-gray-600">
              <li className="flex gap-x-3">
                <ArrowCircleRight
                  className="mt-1 h-5 w-5 flex-none text-secondary"
                  aria-hidden="true"
                />
                <span>
                  unlawful, harmful, threatening, abusive, harassing, tortious, defamatory, vulgar,
                  obscene, libelous, invasive of another's privacy, hateful, or racially,
                  ethnically, or otherwise objectionable;
                </span>
              </li>
              <li className="flex gap-x-3">
                <ArrowCircleRight
                  className="mt-1 h-5 w-5 flex-none text-secondary"
                  aria-hidden="true"
                />
                <span>
                  infringing on any patent, trademark, trade secret, copyright, or other proprietary
                  rights of any party;
                </span>
              </li>
              <li className="flex gap-x-3">
                <ArrowCircleRight
                  className="mt-1 h-5 w-5 flex-none text-secondary"
                  aria-hidden="true"
                />
                <span>
                  unsolicited or unauthorized advertising, promotional materials, "junk mail,"
                  "spam," "chain letters," "pyramid schemes," or any other form of solicitation;
                </span>
              </li>
              <li className="flex gap-x-3">
                <ArrowCircleRight
                  className="mt-1 h-5 w-5 flex-none text-secondary"
                  aria-hidden="true"
                />
                <span>
                  contains software viruses or any other computer code, files, or programs designed
                  to interrupt, destroy, or limit the functionality of any computer software or
                  hardware or telecommunications equipment;
                </span>
              </li>
              <li className="flex gap-x-3">
                <ArrowCircleRight
                  className="mt-1 h-5 w-5 flex-none text-secondary"
                  aria-hidden="true"
                />
                <span>
                  any other content that is illegal or could expose our company or users of the
                  messaging application to liability.
                </span>
              </li>
            </ul>
            <h2 className="mt-8 text-2xl font-bold tracking-tight text-gray-900">
              Monitoring and enforcement
            </h2>
            <p>We have the right to:</p>
            <ul role="list" className="mt-2 mb-2 max-w-xl space-y-4 text-gray-600">
              <li className="flex gap-x-3">
                <ArrowCircleRight
                  className="mt-1 h-5 w-5 flex-none text-secondary"
                  aria-hidden="true"
                />
                <span>remove or refuse to post any content for any reason;</span>
              </li>
              <li className="flex gap-x-3">
                <ArrowCircleRight
                  className="mt-1 h-5 w-5 flex-none text-secondary"
                  aria-hidden="true"
                />
                <span>
                  take any action with respect to any content that we deem necessary or appropriate
                  in our sole discretion, including if we believe that such content violates these
                  terms and conditions, infringes any intellectual property right or other right of
                  any person or entity, threatens the personal safety of users of the messaging
                  application or the public, or could create liability for our company or our users;
                </span>
              </li>
              <li className="flex gap-x-3">
                <ArrowCircleRight
                  className="mt-1 h-5 w-5 flex-none text-secondary"
                  aria-hidden="true"
                />
                <span>
                  disclose your identity or other information about you to any third party who
                  claims that material posted by you violates their rights, including their
                  intellectual property rights or their right to privacy;
                </span>
              </li>
              <li className="flex gap-x-3">
                <ArrowCircleRight
                  className="mt-1 h-5 w-5 flex-none text-secondary"
                  aria-hidden="true"
                />
                <span>
                  terminate or suspend your access to all or part of the messaging application for
                  any or no reason, including without limitation, any violation of these terms and
                  conditions.
                </span>
              </li>
            </ul>
            <h2 className="mt-8 text-2xl font-bold tracking-tight text-gray-900">
              Intellectual Property
            </h2>
            <p>
              The App and the Services, including all content and information made available through
              the App and the Services, are the property of Platsage or its licensors, and are
              protected by copyright, trademark, and other intellectual property laws. You may not
              use any of the App or the Services’ content or information without Platsage’s express
              written permission.
            </p>
            <ul role="list" className="mt-2 mb-2 max-w-xl space-y-4 text-gray-600">
              <li className="flex gap-x-3">
                <ArrowCircleRight
                  className="mt-1 h-5 w-5 flex-none text-secondary"
                  aria-hidden="true"
                />
                <span>
                  <strong>Ownership.</strong> The messaging application and all of its associated
                  intellectual property, including but not limited to trademarks, service marks,
                  logos, designs, and copyrights, are the sole and exclusive property of the
                  application's owners. Users are not granted any ownership or license rights to any
                  of the application's intellectual property.
                </span>
              </li>
              <li className="flex gap-x-3">
                <ArrowCircleRight
                  className="mt-1 h-5 w-5 flex-none text-secondary"
                  aria-hidden="true"
                />
                <span>
                  <strong>User Content.</strong> By posting, submitting, or otherwise transmitting
                  content to the messaging application, users grant the application a non-exclusive,
                  royalty-free, transferable, sub-licensable, worldwide license to use, copy,
                  modify, create derivative works based on, distribute, publicly display, publicly
                  perform, and otherwise exploit such content in all formats and distribution
                  channels now known or hereafter devised.
                </span>
              </li>
              <li className="flex gap-x-3">
                <ArrowCircleRight
                  className="mt-1 h-5 w-5 flex-none text-secondary"
                  aria-hidden="true"
                />
                <span>
                  <strong>Infringement.</strong> The messaging application respects the intellectual
                  property rights of others and expects its users to do the same. If you believe
                  that any content on the application infringes your intellectual property rights,
                  please contact us immediately at{' '}
                  <Link href="mailto:contact@platsage.com">contact@platsage.com</Link> . Upon
                  receiving proper notice of infringement, we will promptly remove or disable access
                  to the infringing material.
                </span>
              </li>
              <li className="flex-col">
                <div className="flex gap-x-3">
                  <ArrowCircleRight
                    className="mt-1 h-5 w-5 flex-none text-secondary"
                    aria-hidden="true"
                  />
                  <span>
                    <strong>DMCA.</strong> If you are a copyright owner or an agent thereof and
                    believe that any content on the messaging application infringes upon your
                    copyright, you may submit a notification pursuant to the Digital Millennium
                    Copyright Act ("DMCA") by providing our designated copyright agent with the
                    following information in writing:
                  </span>
                </div>
                <ul
                  role="list"
                  className="mt-2 mb-2 ml-16 max-w-xl list-disc space-y-4 text-gray-600">
                  <li>
                    A physical or electronic signature of a person authorized to act on behalf of
                    the owner of an exclusive right that is allegedly infringed;
                  </li>
                  <li>
                    Identification of the copyrighted work claimed to have been infringed, or, if
                    multiple copyrighted works on the application are covered by a single
                    notification, a representative list of such works on the application;
                  </li>
                  <li>
                    Identification of the material that is claimed to be infringing or to be the
                    subject of infringing activity and that is to be removed or access to which is
                    to be disabled, and information reasonably sufficient to permit the messaging
                    application to locate the material;
                  </li>
                  <li>
                    Information reasonably sufficient to permit the messaging application to contact
                    the complaining party, such as an address, telephone number, and, if available,
                    an email address at which the complaining party may be contacted;
                  </li>
                  <li>
                    A statement that the complaining party has a good faith belief that use of the
                    material in the manner complained of is not authorized by the copyright owner,
                    its agent, or the law; and
                  </li>
                  <li>
                    A statement that the information in the notification is accurate, and under
                    penalty of perjury, that the complaining party is authorized to act on behalf of
                    the owner of an exclusive right that is allegedly infringed.
                  </li>
                </ul>
              </li>
            </ul>
            <h2 className="mt-8 text-2xl font-bold tracking-tight text-gray-900">Privacy</h2>
            <p>
              Platsage respects your privacy and has developed a{' '}
              <Link href="/privacy-policy">Privacy Policy</Link> that explains how we collect, use,
              and protect your personal information. By using the App or the Services, you agree to
              be bound by our Privacy Policy.
            </p>
            <h2 className="mt-8 text-2xl font-bold tracking-tight text-gray-900">Disclaimers</h2>
            <div className="space-y-4">
              <p>
                The App and the Services are provided “as is” and “as available” without warranty of
                any kind, either express or implied, including without limitation any warranty for
                information, services, uninterrupted access, or products provided through or in
                connection with the App or the Services. Platsage does not warrant that the App or
                the Services will be uninterrupted or error-free.
              </p>
              <p>
                Users agree to indemnify and hold harmless the application, its owners, and its
                affiliates, from and against any claims, actions, suits, or proceedings, as well as
                any and all losses, liabilities, damages, costs, and expenses (including reasonable
                attorneys' fees) arising out of or in connection with the user's use of the App,
                including but not limited to any violation by the user of these terms and conditions
                or any applicable law, regulation, or order.
              </p>
            </div>
            <h2 className="mt-8 text-2xl font-bold tracking-tight text-gray-900">
              Limitation of Liability
            </h2>
            <p>
              To the fullest extent permitted by law, in no event shall Platsage or its affiliates
              be liable for any indirect, incidental, special, punitive, or consequential damages,
              including but not limited to damages for loss of profits, goodwill, use, data, or
              other intangible losses arising out of or relating to your use of the App or the
              Services.
            </p>
            <h2 className="mt-8 text-2xl font-bold tracking-tight text-gray-900">Termination</h2>
            <p>
              Platsage may terminate your use of the App or the Services at any time and for any
              reason. You may also terminate your use of the App or the Services at any time.
            </p>
            <h2 className="mt-8 text-2xl font-bold tracking-tight text-gray-900">
              Changes to the Terms and Conditions
            </h2>
            <p>
              Platsage may revise these Terms at any time without notice by updating this posting.
              Your continued use of the App or the Services after any such changes have been made
              will constitute your acceptance of the revised Terms.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
/* eslint-enable */
