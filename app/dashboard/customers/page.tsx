import CustomerInfoTable from '@/app/ui/customers/customer-table';
import { lusitana } from '@/app/ui/fonts';
import { fetchAllCustomersInformation } from '@/app/lib/data';

export default async function Page() {
  const customerList = await fetchAllCustomersInformation();

  return (
    <main>
      <CustomerInfoTable></CustomerInfoTable>
    </main>
  );
  }