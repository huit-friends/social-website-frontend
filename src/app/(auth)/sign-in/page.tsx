import React from 'react'
import Link from "next/link"
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import styles from './sign-in-page.module.scss';

import ButtonGoogle from '@/shared/components/button-google'
import ButtonApple from '@/shared/components/button-apple'
import ButtonFacebook from '@/shared/components/button-facebook'


export default function SignInPage() {
  return (
    <div className="flex-1 flex items-center justify-center">
      <div className={` ${styles["form-group"]} w-full max-w-md p-8 rounded-md`}>
        <h2 className="text-2xl font-bold text-center mb-6">
          Welcome!
        </h2>

        <div className="mb-4">
          <label className="block font-medium mb-2">Email address</label>
          <Input type="email" placeholder="Enter your email" />
        </div>

        <div className="mb-4">
          <label className="block font-medium mb-2">Password</label>
          <Input type="password" placeholder="Enter your password" />
        </div>

        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-2">
            <Checkbox id="remember" />
            <label htmlFor="remember" className="text-gray-700 text-sm">
              Remember me
            </label>
          </div>
          <Link href="/forgot-password" className="text-red-500 text-sm">
            Forgot password?
          </Link>
        </div>

        <Button className="w-full bg-red-600 text-white hover:bg-red-700">
          Sign in
        </Button>

        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className=" px-2 dark:bg-black">Or continue with</span>
          </div>
        </div>

        <div className="flex justify-center space-x-4">
            <ButtonGoogle/>
            <ButtonApple/>
            <ButtonFacebook/>
        </div>

        <p className="mt-6 text-center text-gray-700 text-sm">
          <span> Don&apos;t have an account?{" "}</span>
          <Link href="/sign-up" className="text-red-600 font-medium">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  )
}
