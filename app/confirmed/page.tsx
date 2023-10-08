import { ThankYouIcon } from "@/components/Icons"
import { PageTitle } from "@/components/PageTitle"

export default function Confirmed() {
  return (
    <div className="flex py-8 gap-6 justify-center flex-col items-center text-center">
      <ThankYouIcon />
      <PageTitle className="normal-case">Thank you!</PageTitle>
      <p className="text-cool-gray">
        Thanks for confirming your subscription! We hope you have fun using our platform.
        If you ever need support, please feel free to email us at support@loremgaming.com.
      </p>
    </div>
  )
}
