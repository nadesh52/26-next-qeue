"use client";

import FacebookIcon from "@/components/FacebookIcon";
import GoogleIcon from "@/components/GoogleIcon";
import Line from "@/components/Line";
import SocialMediaLoginButton from "@/components/SocialMediaLoginButton";
import TextInput from "@/components/TextInput";
import Link from "next/link";
import React, { useState } from "react";

const LoginPage = () => {
  const [inputs, setInputs] = useState<any>({});

  const handleSubmit = (event: any) => {
    console.log(inputs);
  };

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    event.preventDefault();
    setInputs((prev: any) => ({ ...prev, [name]: value }));
  };

  return (
    <section className="flex h-dvh w-dvw flex-col bg-slate-50 p-8">
      <div className="flex gap-4">
        <div>logo</div>
        <div>
          <Link href="">Find Queue</Link>
        </div>
      </div>

      <div className="flex h-full w-full items-center justify-center">
        <div className='z-50 flex min-w-[800px] gap-4 rounded-md border-white bg-white bg-[url("/images/login-bg.jpg")] bg-contain bg-right bg-no-repeat p-6 shadow-[0px_2px_10px_rgba(0,0,0,0.1)]'>
          <div className="min-w-[350px] space-y-4 rounded-md border border-slate-200 bg-white bg-white/70 p-4 shadow-md backdrop-blur-[2px]">
            <div className="space-y-4">
              <div>
                <h2 className="text-xl font-medium">Sign in</h2>
              </div>
              <div>
                <p className="text-slate-500">Email</p>
                <TextInput
                  type="text"
                  name="email"
                  value={inputs.email || ""}
                  onChange={handleChange}
                />
              </div>
              <div>
                <p className="text-slate-500">Password</p>
                <TextInput
                  type="password"
                  name="password"
                  value={inputs.password || ""}
                  onChange={handleChange}
                />
              </div>
              <div>
                <button
                  onClick={handleSubmit}
                  className="h-10 w-full rounded-md bg-amber-300 p-2 font-medium hover:-translate-y-[1px] hover:bg-amber-400 hover:shadow-md"
                >
                  Sign in
                </button>
              </div>
            </div>

            <div className="flex w-full select-none items-center gap-2">
              <Line />
              <div>
                <p className="text-sm font-light text-slate-400">OR</p>
              </div>
              <Line />
            </div>

            <div className="space-y-4">
              <SocialMediaLoginButton
                title="Sign in with Facebook"
                icon={<FacebookIcon />}
              />
              <SocialMediaLoginButton
                title="Sign in with Google"
                icon={<GoogleIcon />}
              />
            </div>

            <div className="text-center">
              <p>
                Don't have an account ?{" "}
                <Link href="" className="font-medium hover:text-amber-400">
                  Sign up
                </Link>
              </p>
            </div>
          </div>
          {/* <div>IMAGE</div> */}
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
