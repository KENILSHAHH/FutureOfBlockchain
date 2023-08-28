
import { LatestTransactions, SQLQuery } from "@sort/react-components";

export default function sort() {
    return (
 <SQLQuery
  query="select
  *
from
  ethereum.transaction
where
  to_address = '0x00000000000c2e074ec69a0dfb2997ba6c7d2e1e'
limit
  3"
            api_key="ec2fa3f2-7fdc-4342-9ebc-95f8b2bd7d21"
            theme="light"
  />

  )
}
