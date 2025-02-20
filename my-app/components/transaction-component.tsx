import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface TransactionComponentProps {
  transactionType: string
  fromAddress: string
  toAddress: string
  amount: string
  tokenType: string
}

export function TransactionComponent({
  transactionType,
  fromAddress,
  toAddress,
  amount,
  tokenType,
}: TransactionComponentProps) {
  return (
    <Card className="w-full max-w-md mx-auto dark:bg-gray-800">
      <CardHeader className="dark:text-gray-100">
        <CardTitle className="text-lg sm:text-xl">{transactionType} Transaction</CardTitle>
        <CardDescription className="dark:text-gray-300 text-sm">
          Review the details of your token transaction
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="from" className="dark:text-gray-200 text-sm">
              From Address
            </Label>
            <Input
              id="from"
              value={fromAddress}
              readOnly
              className="dark:bg-gray-700 dark:text-gray-100 dark:border-gray-600 text-sm"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="to" className="dark:text-gray-200 text-sm">
              To Address
            </Label>
            <Input
              id="to"
              value={toAddress}
              readOnly
              className="dark:bg-gray-700 dark:text-gray-100 dark:border-gray-600 text-sm"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="amount" className="dark:text-gray-200 text-sm">
                Amount
              </Label>
              <Input
                id="amount"
                value={amount}
                readOnly
                className="dark:bg-gray-700 dark:text-gray-100 dark:border-gray-600 text-sm"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="token-type" className="dark:text-gray-200 text-sm">
                Token Type
              </Label>
              <Select defaultValue={tokenType}>
                <SelectTrigger
                  id="token-type"
                  className="dark:bg-gray-700 dark:text-gray-100 dark:border-gray-600 text-sm"
                >
                  <SelectValue placeholder="Select token type" />
                </SelectTrigger>
                <SelectContent className="dark:bg-gray-700">
                  <SelectItem value="eth">ETH</SelectItem>
                  <SelectItem value="usdt">USDT</SelectItem>
                  <SelectItem value="usdc">USDC</SelectItem>
                  <SelectItem value="dai">DAI</SelectItem>
                  <SelectItem value="apt">APT</SelectItem>
                  <SelectItem value="rlusd">RLUSD</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex flex-col sm:flex-row justify-between space-y-2 sm:space-y-0 sm:space-x-2">
        <Button
          variant="outline"
          className="w-full sm:w-auto dark:bg-gray-700 dark:text-gray-100 dark:border-gray-600 dark:hover:bg-gray-600"
        >
          Cancel
        </Button>
        <Button className="w-full sm:w-auto bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-600 dark:text-gray-100 dark:hover:bg-gray-500">
          Confirm Transaction
        </Button>
      </CardFooter>
    </Card>
  )
}

