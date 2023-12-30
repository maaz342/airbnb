import getListingById from "@/app/actions/getListingById";
import ClientOnly from "@/app/component/ClientOnly";
import EmptyState from "@/app/component/EmptyState";
import ListingClient from "./ListingClient";
import getCurrentUser from "@/app/actions/getCurrentUser";
import getReservations from "@/app/actions/getReservations";


 interface IParams { 
  listingId?: string;
} 
 const ListingPage=async ({ params}: { params: IParams }) =>{ 
  const reservations=await getReservations(params)
  const listing=await getListingById(params) 
  const currentUser=await getCurrentUser()
  if(!listing){
    return(
    <ClientOnly>
      <EmptyState/>
    </ClientOnly>
    )
  }  

  return ( <ClientOnly>
    <ListingClient
    listing={listing}
reservations={reservations}
currentUser={currentUser}/>
  </ClientOnly> );
 } 
  export default ListingPage;
