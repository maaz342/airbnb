import Image from 'next/image'
import Container from './component/Container'
import ClientOnly from './component/ClientOnly'
import EmptyState from './component/EmptyState';
import getlistings from './actions/getListing';
import ListingCard from './component/listing/ListingCard';
import getCurrentUser from './actions/getCurrentUser';


export default async function Home() {
  const listing=await getlistings();
  const CurrentUser=await getCurrentUser();
  if(listing.length===0){
    return(
      <ClientOnly>
        <EmptyState showReset/>
      </ClientOnly>
    )
  }
  return (
      <ClientOnly>
        <Container>
          <div 
            className="
              pt-24
              grid 
              grid-cols-1 
              sm:grid-cols-2 
              md:grid-cols-3 
              lg:grid-cols-4
              xl:grid-cols-5
              2xl:grid-cols-6
              gap-8
            "
          >      
{listing.map((listing: any) => {
    return(
          
          <ListingCard
          currentUser={CurrentUser}
          key={listing.id}
          data={listing}
        />
  )
})}    </div>
    </Container>
    </ClientOnly>
 )
}
