import { SelectTransactionTypes } from "@/components/SelectTransactionTypes";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { TRANSACTIONS } from "./constants/transactions";

export default function Home() {
  return (
    <div className="container flex justify-between gap-5">
      <section className="max-w-[25rem] w-full border border-gray-600 rounded py-5 px-4">
        <h1 className="mb-5 text-center text-black text-lg font-bold">
          Nova transação
        </h1>

        <div className="flex flex-col gap-5">
          <div>
            <Label htmlFor="typeTransaction">Tipo de transação</Label>
            <SelectTransactionTypes />
          </div>

          <div>
            <Label htmlFor="name">Nome da mercadoria</Label>
            <Input id="name" type="text" />
          </div>

          <div>
            <Label htmlFor="value">Valor</Label>
            <Input id="value" type="text" />
          </div>

          <Button className="bg-slate-700">Adicionar transação</Button>
        </div>
      </section>

      <section className="w-full py-5 px-4">
        <h1 className="mb-5 text-center text-black text-lg font-bold">
          Extrato de transações
        </h1>

        <Table>
          <TableCaption>A list of your recent invoices.</TableCaption>

          <TableHeader>
            <TableRow>
              <TableHead colSpan={3}>Mercadoria</TableHead>
              <TableHead className="text-right">Valor</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {TRANSACTIONS.map((invoice) => (
              <TableRow key={invoice.invoice}>
                <TableCell colSpan={3} className="font-medium">
                  {invoice.invoice}
                </TableCell>

                <TableCell className="text-right">
                  {invoice.totalAmount}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>

          <TableFooter>
            <TableRow>
              <TableCell colSpan={3}>Total</TableCell>
              <TableCell className="text-right">$2,500.00</TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </section>
    </div>
  );
}
