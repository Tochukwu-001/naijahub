"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, type SubmitHandler } from "react-hook-form";
import * as z from "zod";
import { Theme } from "@/components/Theme";

const postSchema = z.object({
  name: z.string().min(2, "Business name must be at least 2 characters long"),
  info: z.string().min(10, "Please provide at least 10 characters of description"),
  sector: z.string().min(1, "Please select a business sector"),
  initialCapital: z.string().min(1, "Initial capital estimate is required"),
  address: z.string().min(3, "Business address or location is required"),
  resources: z.string().optional(),
});

type FormValues = z.infer<typeof postSchema>;

export default function Post({ session }: { session: any }) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(postSchema),
    defaultValues: {
      name: "",
      info: "",
      sector: "",
      initialCapital: "",
      address: "",
      resources: "",
    },
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    // Capture user details and timestamp
    const finalPayload = {
      ...data,
      authorName: session?.user?.name || "Anonymous",
      authorImage: session?.user?.image || "",
      createdAt: new Date().toISOString(),
    };

    console.log("Validated & Enriched Venture Post Data:", finalPayload);
    // Submit finalPayload to your backend / database / Server Action here
  };

  const sectors = [
    "Logistics & Transport",
    "Agribusiness & Food Processing",
    "Clean Energy & Solar",
    "Fintech & Agent Banking",
    "Retail & E-commerce",
    "Real Estate & Construction",
    "Hospitality & Services",
    "Manufacturing & Production",
  ];

  return (
    <main className="min-h-dvh bg-neutral-950 text-neutral-100 py-12 px-4 md:px-8">
      <div className="max-w-2xl mx-auto bg-neutral-900 border border-neutral-800 rounded-3xl p-6 md:p-10 shadow-xl">
        
        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl font-extrabold uppercase tracking-tight mb-2">
            Share a <span style={{ color: Theme.secondary }}>Venture Insight</span>
          </h1>
          <p className="text-neutral-400 text-sm">
            Help aspiring entrepreneurs in Nigeria by sharing practical costs, experiences, and lessons learned.
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
          
          {/* Business Name */}
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-xs font-semibold text-neutral-300 uppercase tracking-wider">
              Business Name <span className="text-red-500">*</span>
            </label>
            <input 
              type="text" 
              id="name" 
              placeholder="e.g. ExpressWay Haulage & Logistics"
              className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-neutral-600 transition-colors"
              {...register("name")} 
            />
            {errors.name && (
              <span className="text-red-500 text-xs font-medium">
                {errors.name.message}
              </span>
            )}
          </div>

          {/* Sector Dropdown */}
          <div className="flex flex-col gap-2">
            <label htmlFor="sector" className="text-xs font-semibold text-neutral-300 uppercase tracking-wider">
              Business Sector <span className="text-red-500">*</span>
            </label>
            <select 
              id="sector"
              className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-neutral-600 transition-colors"
              {...register("sector")}
            >
              <option value="">Select a sector</option>
              {sectors.map((sec, idx) => (
                <option key={idx} value={sec}>{sec}</option>
              ))}
            </select>
            {errors.sector && (
              <span className="text-red-500 text-xs font-medium">
                {errors.sector.message}
              </span>
            )}
          </div>

          {/* Initial Capital / Startup Cost */}
          <div className="flex flex-col gap-2">
            <label htmlFor="initialCapital" className="text-xs font-semibold text-neutral-300 uppercase tracking-wider">
              Initial Capital / Startup Cost <span className="text-red-500">*</span>
            </label>
            <input 
              type="text" 
              id="initialCapital" 
              placeholder="e.g. ₦1,500,000"
              className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-neutral-600 transition-colors"
              {...register("initialCapital")} 
            />
            {errors.initialCapital && (
              <span className="text-red-500 text-xs font-medium">
                {errors.initialCapital.message}
              </span>
            )}
          </div>

          {/* Business Address / Location */}
          <div className="flex flex-col gap-2">
            <label htmlFor="address" className="text-xs font-semibold text-neutral-300 uppercase tracking-wider">
              Location / Address <span className="text-red-500">*</span>
            </label>
            <input 
              type="text" 
              id="address" 
              placeholder="e.g. Ikeja Industrial Area, Lagos"
              className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-neutral-600 transition-colors"
              {...register("address")} 
            />
            {errors.address && (
              <span className="text-red-500 text-xs font-medium">
                {errors.address.message}
              </span>
            )}
          </div>

          {/* Business Info / Description */}
          <div className="flex flex-col gap-2">
            <label htmlFor="info" className="text-xs font-semibold text-neutral-300 uppercase tracking-wider">
              Business Info & Practical Experience <span className="text-red-500">*</span>
            </label>
            <textarea 
              id="info" 
              rows={5}
              placeholder="Share details about equipment needed, daily challenges, hidden costs, and lessons learned..."
              className="w-full bg-neutral-950 border border-neutral-800 rounded-xl p-4 text-white text-sm focus:outline-none focus:border-neutral-600 transition-colors resize-none"
              {...register("info")} 
            />
            {errors.info && (
              <span className="text-red-500 text-xs font-medium">
                {errors.info.message}
              </span>
            )}
          </div>

          {/* Resources / Useful Links */}
          <div className="flex flex-col gap-2">
            <label htmlFor="resources" className="text-xs font-semibold text-neutral-300 uppercase tracking-wider">
              Helpful Resources / Links (Optional)
            </label>
            <input 
              type="text" 
              id="resources" 
              placeholder="e.g. CAC registration portal link, supplier contacts"
              className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-neutral-600 transition-colors"
              {...register("resources")} 
            />
          </div>

          {/* Submit Button */}
          <button 
            type="submit" 
            disabled={isSubmitting}
            style={{ backgroundColor: Theme.primary }}
            className="w-full text-white font-semibold py-4 rounded-xl text-base hover:opacity-90 transition-opacity mt-2 shadow-lg cursor-pointer disabled:opacity-50"
          >
            {isSubmitting ? "Validating & Submitting..." : "Publish Venture Post"}
          </button>

        </form>

      </div>
    </main>
  );
}