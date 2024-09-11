import Image from 'next/image'
import { ArrowRight, Check, ChevronDown } from 'lucide-react'

export default function LandingPage() {
  return (
    <div className="bg-black text-white min-h-screen">
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="text-3xl font-bold">$</div>
        <nav className="hidden md:flex space-x-6">
          <a href="#" className="hover:text-green-400">About</a>
          <a href="#" className="hover:text-green-400">Features</a>
          <a href="#" className="hover:text-green-400">Pricing</a>
          <a href="#" className="hover:text-green-400">Contact</a>
        </nav>
        <button className="bg-green-400 text-gray-900 px-4 py-2 rounded-full font-semibold">Join Now</button>
      </header>

      <main>
        <section className="bg-black container mx-auto px-4 py-20 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
          <h2 className="mb-12 text-gray-1200">EMPOWERING YOU TO ACHIEVE</h2>
            <h1 className="text-5xl font-bold mb-6">Empowering You to Achieve Financial Freedom Smart Simple Solutions</h1>
            <p className="mb-8 text-gray-400">Our app is designed to simplify your financial life, providing intuitive tools and insights to help you manage your money effectively, whether you're budgeting, saving.</p>
            <div className="space-x-4">
              <button className="bg-green-400 text-gray-900 px-6 py-3 rounded-full font-semibold">Get Started</button>
              <button className="border border-green-400 text-green-400 px-6 py-3 rounded-full font-semibold">Join Now</button>
            </div>
          </div>
          <div className="md:w-1/2">
            <Image src="/h1.jpg?height=600&width=300" width={400} height={1000} alt="App mockup" className="mx-auto" />
          </div>
        </section>

        <section className="bg-white  rounded-t-3xl rounded-b-3xl py-10">
          <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="text-center">
              <h3 className="text-black text-4xl font-bold mb-2">$0.67 B</h3>
              <p className="text-black">TOTAL USER CRYPTOASSETS VALUE</p>
              &nbsp
              <p className="text-left text-black text-3xl font-bold mb-2">Your Funds are Save as Always </p>
              <p className="text-black">Hodbot is a Customizable cryptocurrency trading bot that enables users to index the market, create custom portfolios and automatically rebalance</p>
              <button className="text-black text-2xl font-bold mb-2">Learn More </button>
            </div>
            <div className="text-center">
              <h3 className="text-black text-4xl font-bold mb-2">704K+</h3>
              <p className="text-black">TOTAL NUMBERS OF VERIFIED USERS</p>
              &nbsp
              <p className=" text-black text-3xl font-bold mb-2">Protected by the Most Secure</p>
              <p className="text-black ">Hodbot is a Customizable cryptocurrency trading bot that enables users to index the market, create custom portfolios and automatically rebalance</p>
              <button className="text-black text-2xl font-bold mb-2">Learn More </button>
               </div>
            <div className="text-center">
              <h3 className="text-black text-4xl font-bold mb-2">113K+</h3>
              <p className="text-black">CHSB TOKEN HOLDERS</p>
              &nbsp
              <p className=" text-black text-3xl font-bold mb-2">Licensed in EU and Regulatory</p>
              <p className="text-black ">Hodbot is a Customizable cryptocurrency trading bot that enables users to index the market, create custom portfolios and automatically rebalance</p>
              <button className="text-black text-2xl font-bold mb-2">Learn More </button>
            </div>
          </div>
        </section>
        <section className="bg-black py-10">
          <div className="container"></div>
          </section>
        <section className=" bg-white rounded-t-3xl rounded-b-3xl container mx-auto px-10 py-10 rounded-half">
          <div className=" bg-black rounded-3xl p-10 flex flex-col md:flex-row items-center mb-10">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h2 className="text-3xl font-bold mb-4">Comprehensive Financial Management</h2>
              <p className="text-gray-400 mb-6">Manage your finances effortlessly with our all-in-one platform offering budgeting, savings, investment tracking, and bill management.</p>
              <button className="bg-green-400 text-gray-900 px-6 py-3 rounded-full font-semibold mr-4">Get Started Now</button>
              <button className="border border-grey-400 text-grey-1200 px-6 py-3 rounded-full font-semibold mr-4">Explore Our Services</button>
            </div>
            <div className="md:w-1/2">
              <Image src="/h2.jpg?height=400&width=200" width={400} height={500} alt="App feature mockup" className="mx-auto" />
            </div>
          </div>
          
          <div className="bg-black rounded-3xl p-10 flex flex-col md:flex-row items-center mb-10">
            <div className="md:w-1/2 mb-10 md:mb-0">
            <Image src="/h3.jpg?height=400&width=200" width={400} height={500} alt="App feature mockup" className="mx-auto" />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-4">All-Inclusive Financial Management</h2>
              <p className="text-gray-400 mb-6">Our all-inclusive financial management system offers a complete suite of tools to handle every aspect of your finances.</p>
              <button className="bg-green-400 text-gray-900 px-6 py-3 rounded-full font-semibold mr-4">Get Started Today</button>
              <button className="border border-grey-400 text-grey-1200 px-6 py-3 rounded-full font-semibold mr-4">Explore Our Services </button>
            </div>
          </div>
        </section>
        <section className=" bg-black rounded-t-3xl rounded-b-3xl container mx-auto px-10 py-10 rounded-half">
          <div className=" bg-black rounded-3xl p-10 flex flex-col md:flex-row items-center mb-10">
            <div className="md:w-1/2 mb-10 md:mb-0">
             <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
             <p className="text-gray-400 mb-6">Find answers to common questions about our services and features</p>
             <button className="bg-green-400 text-gray-900 px-6 py-3 rounded-full font-semibold mr-4">Ask US</button>
              </div>
             <div className="md:w-1/7 text-left" className="mx-auto"/>
             {['How do I set up an account?', 'What features does your app offer?', 'Is my financial data secure?', 'How can I contact customer support?', 'What should I do if I forget my password?'].map((question, index) => (
              <div key={index} className="bg-black p-4 mb-8 rounded-lg flex justify-between items-right">
                <h3 className="text-lg font-semibold">{question}</h3>
                <ChevronDown className="text-green-400" />
              </div>
            ))}
          </div>
        </section>
        <section className="bg-white container rounded-t-3xl rounded-b-3xl mx-auto px-4 py-20">
          <h2 className="text-black text-3xl font-bold text-center mb-10">Get In Touch for Pricing</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-gray-800 p-10 rounded-3xl">
              <h3 className="text-2xl font-bold mb-4">PERSONAL</h3>
              <div className="text-4xl font-bold mb-6">$541 <span className="text-lg font-normal text-gray-400">Per Month</span></div>
              <p className="text-gray-400 mb-6">For individuals and small teams looking to manage their tasks.</p>
              <ul className="space-y-4 mb-8">
                {['Access Contacts Anytime Anywhere', 'Easy and Secure Unlimited Contacts', 'Unlimited Contacts at Your Fingertips', 'Stay Connected Contacts and Flexibility', 'No Limits on Contact Storage'].map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <Check className="text-green-400 mr-2" /> {feature}
                  </li>
                ))}
              </ul>
              <button className="w-full bg-green-400 text-gray-900 py-3 rounded-full font-semibold">Get Started Now</button>
            </div>
            <div className="bg-gray-800 p-10 rounded-3xl">
              <h3 className="text-2xl font-bold mb-4">PRO</h3>
              <div className="text-4xl font-bold mb-6">$747 <span className="text-lg font-normal text-gray-400">Per Month</span></div>
              <p className="text-gray-400 mb-6">For individuals and small teams looking to manage their tasks.</p>
              <ul className="space-y-4 mb-8">
                {['Unlimited Contacts No Limits Applied', 'Connect with Unlimited Contacts', 'Access Your Unlimited Contacts Anytime', 'Unlimited Contacts and Flexibility', 'Store and Organize Unlimited Contacts'].map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <Check className="text-green-400 mr-2" /> {feature}
                  </li>
                ))}
              </ul>
              <button className="w-full bg-green-400 text-gray-900 py-3 rounded-full font-semibold">Get Started Now</button>
            </div>
          </div>
        </section>

        <section className="bg-black py-20 text-center">
          <h2 className="text-3xl font-bold mb-6">Connect your finances with Carty</h2>
          <button className="bg-green-400 text-gray-900 px-6 py-3 rounded-full font-semibold">Join Finzen Now</button>
        </section>
      </main>

      <footer className="container mx-auto px-4 py-10">
        <div className="flex justify-between items-center border-t border-gray-800 pt-10">
          <div className="text-sm text-gray-400">© 2024 Finzen. All rights reserved.</div>
          <div className="flex space-x-4">
            <a href="#" className="text-sm text-gray-400 hover:text-white">Terms & Agreements</a>
            <a href="#" className="text-sm text-gray-400 hover:text-white">Privacy Policy</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
