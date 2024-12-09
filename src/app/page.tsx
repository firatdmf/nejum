// import Image from "next/image";
// import Link from "next/link";
import classes from "@/app/page.module.css";
export default function LandingPage() {
  // const article: string = "Selecting the right product metrics (KPIs)";
  return (
    <div className={classes.LandingPage}>
      <p className="text-3xl">
        Simplify and automate your business with your virtual middle-manager
        Nejum
      </p>
      <section className="py-20" id="features">
        <div className="container mx-auto px-6">
          <h3 className="text-3xl font-semibold text-center mb-10">
            Our Features
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h4 className="text-2xl font-semibold mb-4">
                Automated Invoicing
              </h4>
              <p className="text-gray-600">
                Automate your invoicing process with Nejum’s customizable
                templates and multi-currency support.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h4 className="text-2xl font-semibold mb-4">
                Inventory Management
              </h4>
              <p className="text-gray-600">
                Keep track of stock in real-time, making sure your inventory is
                always updated and under control.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h4 className="text-2xl font-semibold mb-4">
                Integrated Accounting
              </h4>
              <p className="text-gray-600">
                Monitor your finances, and track assets, liabilities, and equity
                from a unified dashboard.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20" id="contact">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-3xl font-semibold mb-10">Get In Touch</h3>
          <p className="text-xl mb-6">
            Ready to streamline your business with Nejum? Contact us today for a
            demo!
          </p>
          <a
            href="mailto:hi@nejum.com"
            className="bg-blue-600 text-white py-2 px-6 rounded-full text-lg hover:bg-blue-700"
          >
            Contact Us
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-4">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Nejum. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}
