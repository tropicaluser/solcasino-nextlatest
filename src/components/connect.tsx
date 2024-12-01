import { Copy } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function DialogCloseButton() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="text-sm text-slate-50 hover:bg-transparent hover:text-slate-50"
              type="button"
              aria-haspopup="dialog"
              aria-expanded="false"
              aria-controls="radix-:r6:"
              data-state="closed">[connect wallet]</button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md bg-gray-800 text-white">
        <DialogHeader>
          <DialogTitle></DialogTitle>
          {/*<DialogDescription>
            Anyone who has this link will be able to view this.
          </DialogDescription> */}
        </DialogHeader>
        <DialogMain />
        {/* <div className="flex items-center space-x-2">
          <div className="grid flex-1 gap-2">
            <Label htmlFor="link" className="sr-only">
              Link
            </Label>
            <Input
              id="link"
              defaultValue="https://ui.shadcn.com/docs/installation"
              readOnly
            />
          </div>
          <Button type="submit" size="sm" className="px-3">
            <span className="sr-only">Copy</span>
            <Copy />
          </Button>
        </div> */}
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            {/* <Button type="button" variant="secondary">
              Close
            </Button> */}
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

function DialogMain() {
  return (
    <div className="grid gap-4"><div className="flex flex-col items-center">

      <h2 className="text-lg">Log in or sign up</h2><div className="mt-2 w-full max-w-[400px]">

        <label className="flex items-center border border-gray-300 rounded-md overflow-hidden">

          <span className="px-2 text-gray-500"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"></path></svg></span>


          <input id="email-input" placeholder="enter solano" autoComplete="email" className="flex-1 min-w-0 w-full p-2 text-white bg-transparent outline-none [@media(max-width:350px)]:text-xs" type="email" value="" />

          <button className="px-4 py-2 text-green-300 [@media(max-width:350px)]:text-xs">submit</button></label><div className="mt-2 flex justify-end"><a href="https://docs.privy.io/guide/react/wallets/overview" target="_blank" rel="noopener noreferrer">


            <img src="https://pump.fun/privy.svg" alt="Protected by Privy" className="filter brightness-0 invert mt-1" /></a></div></div></div></div>
  )
}
