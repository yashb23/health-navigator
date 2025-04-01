import { Footer } from "@/components/app/footer";
import { LoginModal } from "@/components/app/login-modal";
import { Nav } from "@/components/app/nav";
import { useState } from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const openLoginModal = () => {
    setIsLoginModalOpen(true);
  };

  const closeLoginModal = () => {
    setIsLoginModalOpen(false);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <Nav openLoginModal={openLoginModal} />
        <section className="bg-teal-900 text-white py-16 md:py-24 px-6 md:px-12">
          <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-4xl md:text-5xl font-light leading-tight">
                Connecting you to life-changing{" "}
                <div className="relative inline-block my-2">
                  <div className="relative py-2 px-4 border-2 border-teal-400 rounded-full flex items-center">
                    clinical trials
                  </div>
                </div>
              </h1>

              <p className="text-lg text-teal-100">
                Faster, easier and all in one place.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={openLoginModal}
                  className="bg-teal-400 hover:bg-teal-300 transition-colors text-teal-900 font-medium rounded-md px-6 py-3 text-center"
                >
                  Get started for free
                </button>
                <Link
                  to="#"
                  className="border border-teal-700 hover:border-teal-600 text-white hover:text-teal-200 transition-colors rounded-md px-6 py-3 text-center"
                >
                  Schedule a Call
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-xl overflow-hidden shadow-2xl group cursor-pointer">
                <div className="relative">
                  <div className="w-full h-[600px] object-cover transition-all duration-300 group-hover:scale-105 group-hover:brightness-75" />

                  {/* Play button overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                      <div className="w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center shadow-lg">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="white"
                          className="w-8 h-8 ml-1"
                        >
                          <path d="M8 5.14v14l11-7-11-7z" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Video duration */}
                  <div className="absolute bottom-4 right-4 bg-black/70 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-md">
                    2:45
                  </div>
                </div>

                <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-sm rounded-lg p-1"></div>
              </div>

              {/* Video title */}
              <div className="mt-3 px-1">
                <h3 className="text-white text-sm font-medium">
                  Simplifying access to healthcare data!
                </h3>
                <p className="text-teal-300 text-xs mt-1">
                  Watch our introduction to using Health.Navigator
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-slate-100 py-16 px-6 md:px-12">
          <div className="container mx-auto">
            <h3 className="text-teal-900 text-4xl font-light mb-12">
              We make it easy to get started
            </h3>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-8 shadow-md">
                <div className="bg-teal-100 text-teal-600 rounded-full w-12 h-12 flex items-center justify-center mb-6">
                  <span className="font-bold">1</span>
                </div>
                <h4 className="text-teal-900 text-xl font-medium mb-4">
                  Simple Setup
                </h4>
                <p className="text-slate-600">
                  Import your medical records in seconds by logging in via Epic
                  MyChart.
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-md">
                <div className="bg-teal-100 text-teal-600 rounded-full w-12 h-12 flex items-center justify-center mb-6">
                  <span className="font-bold">2</span>
                </div>
                <h4 className="text-teal-900 text-xl font-medium mb-4">
                  Secure Connection
                </h4>
                <p className="text-slate-600">
                  HIPAA-compliant. Get to know your options while retaining your
                  peace of mind.
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-md">
                <div className="bg-teal-100 text-teal-600 rounded-full w-12 h-12 flex items-center justify-center mb-6">
                  <span className="font-bold">3</span>
                </div>
                <h4 className="text-teal-900 text-xl font-medium mb-4">
                  View Matched Trials
                </h4>
                <p className="text-slate-600">
                  Get Clinical Trials that are tailored to your needs.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-teal-900 text-white py-16 px-6 md:px-12">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-light mb-12">
              Ready to take control of your healthcare?
            </h2>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={openLoginModal}
                className="bg-teal-400 hover:bg-teal-300 transition-colors text-teal-900 font-medium rounded-md px-8 py-3"
              >
                Get started for free
              </button>
              <Link
                to="#"
                className="border border-teal-700 hover:border-teal-600 text-white hover:text-teal-200 transition-colors rounded-md px-8 py-3"
              >
                Schedule a call
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <LoginModal isOpen={isLoginModalOpen} onClose={closeLoginModal} />
    </div>
  );
};
