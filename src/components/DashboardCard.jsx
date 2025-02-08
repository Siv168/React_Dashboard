import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faInbox, faMoneyBill, faPeopleGroup } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { InvoiceContext } from "../context/InvoiceContext";

function DashboardCard() {
  const { invoices } = useContext(InvoiceContext);

  const collectedAmount = invoices
    .filter(invoice => invoice.status === 'paid')
    .reduce((total, invoice) => total + parseFloat(invoice.amount), 0);

  const pendingAmount = invoices
    .filter(invoice => invoice.status === 'pending')
    .reduce((total, invoice) => total + parseFloat(invoice.amount), 0);

  const totalCustomers = new Set(invoices.map(invoice => invoice.customerId)).size;

  const data = [
    {
      title: 'Collected',
      value: `$${collectedAmount.toFixed(2)}`,
      icon : <FontAwesomeIcon icon={faMoneyBill} />
    },
    {
      title: 'Pending',
      value: `$${pendingAmount.toFixed(2)}`,
      icon : <FontAwesomeIcon icon={faClock} />
    },
    {
      title: 'Total Invoice',
      value: invoices.length,
      icon : <FontAwesomeIcon icon={faInbox} />
    },
    {
      title: 'Total Customers',
      value: totalCustomers,
      icon : <FontAwesomeIcon icon={faPeopleGroup} />
    }
  ];

  return (
    <>
      {
        data.map((item,index) => (
          <div key={index} className="rounded-xl bg-gray-50 p-2 shadow-sm ">
            <div className="flex font-[inter] text-gray-600 py-2 px-4">
              <div className="">
                {item.icon}
              </div>
              <h3 className="ml-2 text-sm font-medium">
                {item.title}
              </h3>
            </div>
            <p className="rounded-xl bg-white px-4 py-8 text-center text-2xl font-[lustina]">
              {item.value}
            </p>
          </div>
        ))
      }
    </>
  )
}

export default DashboardCard;