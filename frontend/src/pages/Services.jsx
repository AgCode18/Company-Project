import React from 'react'
import Header from '../components/Header/Header.jsx'
import { ArrowRight } from "lucide-react";
import Servicessection from '../components/ServicesPage.jsx';

import {
  Landmark,
  GraduationCap,
  CreditCard,
  PlayCircle,
  CheckCircle,
} from "lucide-react";

import {
  Search,
  ClipboardList,
  PlugZap,
  Rocket,
} from "lucide-react";
import {
  ShieldCheck,
  Zap,
  LifeBuoy,
  TrendingUp,
} from "lucide-react";


const features = [
  {
    icon: ShieldCheck,
    title: "Bank-Grade Security",
    description:
      "SOC 2 Type II, ISO 27001, and end-to-end encryption on every transaction.",
  },
  {
    icon: Zap,
    title: "Quick Integration",
    description:
      "Go live in under 2 weeks with REST APIs, SDKs, and pre-built connectors.",
  },
  {
    icon: LifeBuoy,
    title: "Dedicated Support",
    description:
      "A named success manager plus 24/7 engineering on call.",
  },
  {
    icon: TrendingUp,
    title: "Scalable for Any Size",
    description:
      "From 100-student schools to lenders processing millions of payouts a month.",
  },
];

const steps = [
  {
    icon: Search,
    step: "STEP 1",
    title: "Consult",
    desc: "We map your workflows and goals.",
  },
  {
    icon: ClipboardList,
    step: "STEP 2",
    title: "Onboard",
    desc: "KYC, accounts, and team setup in days.",
  },
  {
    icon: PlugZap,
    step: "STEP 3",
    title: "Integrate",
    desc: "Connect banks, ERPs, and channels via APIs.",
  },
  {
    icon: Rocket,
    step: "STEP 4",
    title: "Go Live",
    desc: "Launch, monitor, and scale with confidence.",
  },
];
const testimonials = [
  {
    quote:
      "We replaced four vendors with Unifin and cut our reconciliation time by 80%.",
    name: "Priya Menon",
    role: "CFO, Greenfield Schools Group",
  },
  {
    quote:
      "Bulk payouts that used to take a day now finish in minutes.",
    name: "Arjun Rao",
    role: "Head of Operations",
  },
  {
    quote:
      "Our SLA compliance jumped from 72% to 98% in the first quarter.",
    name: "Sara Khan",
    role: "Director of Support",
  },
];


const services = [

  {
    title: "Fintech Solutions",
    // icon: CreditCard,
    video: "/videos/fintech-demo.mp4",  // Video will upload from here 👈👈
    // videoTitle: "Watch Fintech Solutions Demo",
    description:
      "Power digital payments, settlements, and compliance with a single, secure financial backbone. Unifin Fintech handles transaction processing, KYC, fraud checks, and API integrations so your team can launch new financial products without rebuilding core infrastructure.",
    features: [
      "PCI-DSS compliant digital payments",
      "Real-time settlement & reconciliation",
      "KYC, AML & fraud monitoring",
      "Open APIs & SDKs for fast integration",
      "Transaction-level audit trails",
    ],
  },

  {
    title: "School Management Solutions",
    // icon: GraduationCap,
    video: "/videos/school-demo.mp4",
    // videoTitle: "Watch School Management Solutions Demo",
    reverse: true,
    description:
      "An end-to-end platform for admissions, academics, fees, and communication. Unifin School replaces scattered spreadsheets and paper trails with a single system that helps administrators, teachers, and parents stay aligned — driving better outcomes for students while reducing operational overhead for the institution.",
    features: [
      "Online admissions & enrollment",
      "Fee management & online collection",
      "Attendance & academic tracking",
      "Parent-teacher communication portal",
      "Timetable & exam management",
    ],
  },

  {
    title: "Loan Management System",
    // icon: Landmark,
    video: "/videos/loan-demo.mp4",
    // videoTitle: "Watch Loan Management System Demo",
    description:
      "Originate, approve, and service loans on a workflow engine built for lenders. Unifin LMS digitizes the full lending lifecycle — from application and credit checks to disbursement and collections — cutting turnaround time from weeks to hours while keeping your portfolio risk and compliance under control.",
    features: [
      "Digital loan origination & e-KYC",
      "Configurable approval workflows",
      "Automated credit scoring & checks",
      "EMI scheduling & collections",
      "Disbursement automation",
    ],
  },
  {
    title: "Paying Payout Management System",
    // icon: Landmark,
    video: "/videos/loan-demo.mp4",
    // videoTitle: "Watch Loan Management System Demo",
    reverse: true,

    description:
      "Originate, approve, and service loans on a workflow engine built for lenders. Unifin LMS digitizes the full lending lifecycle — from application and credit checks to disbursement and collections — cutting turnaround time from weeks to hours while keeping your portfolio risk and compliance under control.",
    features: [
      "Digital loan origination & e-KYC",
      "Configurable approval workflows",
      "Automated credit scoring & checks",
      "EMI scheduling & collections",
      "Disbursement automation",
    ],
  },

  {
    title: "Ticket Booking Management System",
    // icon: Landmark,
    video: "/videos/loan-demo.mp4",
    // videoTitle: "Watch Loan Management System Demo",

    description:
      "Originate, approve, and service loans on a workflow engine built for lenders. Unifin LMS digitizes the full lending lifecycle — from application and credit checks to disbursement and collections — cutting turnaround time from weeks to hours while keeping your portfolio risk and compliance under control.",
    features: [
      "Digital loan origination & e-KYC",
      "Configurable approval workflows",
      "Automated credit scoring & checks",
      "EMI scheduling & collections",
      "Disbursement automation",
    ],
  },
];




function Services() {
  return (
    <>
      <Header />

      <section className="bg-[#f8f9fc] min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left Content */}
            <div>
              {/* <div className="inline-flex items-center gap-2 border border-indigo-200 rounded-full px-4 py-2 text-sm text-indigo-600 bg-white mb-8">
              <span className="w-2 h-2 rounded-full bg-orange-500"></span>
              5 integrated products. 1 unified platform.
            </div> */}

              <h1 className="text-5xl lg:text-5xl font-bold leading-tight text-slate-900">
                One Platform.
                {/* <span className="text-indigo-600"> Five</span> */}
                <br />
                <span className="bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-500 bg-clip-text text-transparent">
                  Powerful Solutions
                </span>
                <br />
                for Modern Institutions.
              </h1>

              <p className="mt-8 text-xl text-slate-600 leading-relaxed max-w-xl">
                Unifin helps schools, lenders, and businesses automate finance,
                payments, and support operations — all from a single, secure
                platform.
              </p>

              <div className="flex flex-wrap gap-4 mt-10">
                <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-xl font-medium flex items-center gap-2 shadow-lg transition">
                  Book a Demo
                  <ArrowRight size={18} />
                </button>

                <button className="border border-slate-300 px-8 py-4 rounded-xl font-medium text-slate-700 hover:bg-white transition">
                  Explore Services
                </button>
              </div>

              {/* Stats */}
              <div className="flex flex-wrap gap-12 mt-14">
                <div>
                  <h3 className="text-4xl font-bold text-slate-900">
                    ₹2,400Cr+
                  </h3>
                  <p className="text-slate-500 mt-1">Processed</p>
                </div>

                <div>
                  <h3 className="text-4xl font-bold text-slate-900">500+</h3>
                  <p className="text-slate-500 mt-1">Institutions</p>
                </div>

                <div>
                  <h3 className="text-4xl font-bold text-slate-900">99.99%</h3>
                  <p className="text-slate-500 mt-1">Uptime</p>
                </div>
              </div>
            </div>

            {/* Right Dashboard Card */}
            <div className="relative">
              <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-200">

                {/* Browser Header */}
                <div className="bg-slate-100 px-6 py-4 flex items-center gap-2 border-b">
                  <span className="w-3 h-3 rounded-full bg-red-400"></span>
                  <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
                  <span className="w-3 h-3 rounded-full bg-green-400"></span>

                  <span className="ml-4 text-slate-500 text-sm">
                    app.unifin.io/overview
                  </span>
                </div>

                <div className="p-6">
                  {/* Product Tabs */}
                  <div className="grid grid-cols-5 gap-4 mb-6">
                    {[
                      "Fintech",
                      "School",
                      "Loan",
                      "Payout",
                      "Ticketing",
                    ].map((item) => (
                      <div
                        key={item}
                        className="border rounded-xl py-5 text-center text-sm text-slate-600 hover:border-indigo-500 cursor-pointer"
                      >
                        {item}
                      </div>
                    ))}
                  </div>

                  {/* Metrics */}
                  <div className="space-y-4">
                    <MetricRow
                      title="Payouts disbursed"
                      value="₹4.2 Cr"
                      growth="+12%"
                    />

                    <MetricRow
                      title="Loans approved"
                      value="318"
                      growth="+8%"
                    />

                    <MetricRow
                      title="Tickets resolved"
                      value="1,247"
                      growth="SLA 98%"
                    />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* <Servicessection /> */}

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Heading */}
          <div className="text-center mb-24">
            <span className="uppercase tracking-wider text-indigo-600 font-semibold text-sm">
              OUR SERVICES
            </span>

            {/* <h2 className="mt-4 text-4xl md:text-5xl font-bold text-slate-900">
                Our Poducts 
              </h2> */}

            <p className="mt-6 text-lg md:text-xl text-slate-500">
              Each solution is powerful on its own — and unstoppable together.
            </p>
          </div>

          {/* Services List */}
          <div className="space-y-32">
            {services.map((service, index) => {
              // const Icon = service.icon;

              return (
                <div
                  key={index}
                  className={`grid lg:grid-cols-2 gap-16 items-center ${service.reverse ? "lg:[&>*:first-child]:order-2" : ""
                    }`}
                >
                  {/* Left Content */}

                  <div>
                    <div className="flex items-center gap-5 mb-8">
                      {/* <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-indigo-500 to-cyan-500 flex items-center justify-center shadow-lg">
                          {/* <Icon className="w-8 h-8 text-white" /> */}
                      {/* </div> */}

                      <h3 className="text-3xl md:text-5xl font-bold text-slate-900">
                        {service.title}
                      </h3>
                    </div>

                    <p className="text-slate-600 text-lg md:text-xl leading-relaxed mb-10">
                      {service.description}
                    </p>

                    <div className="space-y-5 mb-10">
                      {service.features.map((feature, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-4 text-lg text-slate-700"
                        >
                          <CheckCircle className="w-6 h-6 text-teal-500 shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    <button className="group text-indigo-600 font-semibold text-lg flex items-center gap-2 hover:gap-4 transition-all">
                      Learn more about {service.title}
                      {/* <ArrowRight className="w-5 h-5" /> */}
                    </button>
                  </div>

                  {/* Right Video */}
                  <div>
                    <div className="flex items-center gap-2 text-slate-700 font-medium mb-4">
                      <PlayCircle className="w-5 h-5 text-indigo-600" />
                      {service.videoTitle}
                    </div>

                    <div className="rounded-3xl overflow-hidden shadow-2xl border border-slate-200 bg-black">
                      <video
                        className="w-full h-[300px] md:h-[500px] object-cover pointer-events-none"
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="auto"
                      >
                        <source src={service.video} type="video/mp4" />
                      </video>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}

      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-center text-5xl font-bold text-slate-900 mb-16">
            The trusted backbone for finance,
            <br />
            education & support
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition"
                >
                  <div className="w-14 h-14 rounded-xl bg-emerald-50 flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6 text-emerald-600" />
                  </div>

                  <h3 className="font-bold text-xl text-slate-900 mb-3">
                    {feature.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How it Works Section */}

      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-center text-sm font-semibold text-indigo-600 tracking-widest uppercase mb-4">
            How It Works
          </p>

          <h2 className="text-center text-5xl font-bold text-slate-900 mb-20">
            From conversation to launch in four
            <br />
            steps
          </h2>

          <div className="relative">
            <div className="absolute top-8 left-0 right-0 h-[2px] bg-gradient-to-r from-indigo-300 to-cyan-300" />

            <div className="grid md:grid-cols-4 gap-10 relative">
              {steps.map((step, index) => {
                const Icon = step.icon;

                return (
                  <div key={index} className="text-center">
                    <div className="mx-auto w-16 h-16 rounded-full border-2 border-indigo-200 bg-white flex items-center justify-center mb-6 relative z-10">
                      <Icon className="w-7 h-7 text-indigo-600" />
                    </div>

                    <p className="text-xs font-bold text-gray-400 mb-2">
                      {step.step}
                    </p>

                    <h3 className="font-bold text-2xl text-slate-900 mb-3">
                      {step.title}
                    </h3>

                    <p className="text-gray-600">
                      {step.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Testinomial Section */}

      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-center text-xs uppercase tracking-[4px] text-indigo-500 font-semibold">
            Customer Love
          </p>

          <h2 className="text-center text-5xl font-bold text-slate-900 mt-3 mb-14">
            Trusted by teams that move money &
            <br />
            manage people
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((item, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-2xl p-7"
              >
                <p className="text-gray-600 mb-8 leading-relaxed">
                  "{item.quote}"
                </p>

                <div>
                  <h4 className="font-semibold text-slate-900">
                    {item.name}
                  </h4>

                  <p className="text-sm text-gray-500">
                    {item.role}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-14 text-center">
            <p className="text-xs uppercase tracking-[3px] text-gray-400 mb-8">
              Trusted by leading institutions
            </p>

            <div className="flex flex-wrap justify-center gap-16 text-gray-500 font-semibold">
              <span>Greenfield</span>
              <span>EduCredit</span>
              <span>BrightPath</span>
              <span>Vidya Bank</span>
              <span>ScholarPay</span>
              <span>LearnHub</span>
            </div>
          </div>
        </div>
      </section>

      {/*  CTA Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="rounded-3xl bg-gradient-to-r from-indigo-700 via-blue-600 to-cyan-600 p-16 text-center text-white shadow-xl">
            <h2 className="text-5xl font-bold mb-6">
              Ready to streamline your operations
              <br />
              across finance, education & support?
            </h2>

            <p className="text-white/80 mb-10">
              See Unifin in action with a free 30-minute demo tailored to
              your organization.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-white text-indigo-700 px-6 py-3 rounded-lg font-semibold flex items-center gap-2">
                Schedule a Free Demo
                <ArrowRight size={18} />
              </button>

              <button className="border border-white/40 px-6 py-3 rounded-lg font-semibold">
                Talk to Sales
              </button>
            </div>
          </div>
        </div>
      </section>






    </>
  )
}


function MetricRow({ title, value, growth }) {
  return (
    <div className="flex items-center justify-between border rounded-xl px-5 py-4">
      <span className="text-slate-600">{title}</span>

      <div className="flex items-center gap-4">
        <span className="font-semibold text-slate-900">{value}</span>
        <span className="text-emerald-500 text-sm font-medium">
          {growth}
        </span>
      </div>
    </div>
  );
}

export default Services