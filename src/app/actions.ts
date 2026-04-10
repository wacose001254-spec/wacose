'use server'
import { db } from '../db';
import { orders } from '../db/schema';

export async function handleBooking(formData: FormData) {
  const pickup = formData.get('pickup') as string;
  const destination = formData.get('destination') as string;

  try {
    // This is the line that actually writes to the cloud!
    await db.insert(orders).values({ 
      pickup, 
      destination 
    });
    
    console.log(`🚀 WACOSE SUCCESS: Order from ${pickup} to ${destination} saved to cloud!`);
  } catch (error) {
    console.error("❌ Database Error:", error);
  }
}