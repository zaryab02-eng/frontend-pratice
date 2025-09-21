const drivers = [
  { id: 1, name: "Mike", vehicle: "car", zone: "north" },
  { id: 2, name: "Lisa", vehicle: "bike", zone: "south" },
  { id: 3, name: "Tom", vehicle: "car", zone: "north" },
];

const deliveries = [
  { driverId: 1, distance: 5, tip: 8, status: "completed" },
  { driverId: 1, distance: 3, tip: 5, status: "completed" },
  { driverId: 2, distance: 2, tip: 4, status: "completed" },
  { driverId: 2, distance: 1, tip: 2, status: "cancelled" },
  { driverId: 3, distance: 7, tip: 10, status: "completed" },
];

// Goal: Show each driver's total distance and tips for COMPLETED deliveries only
// Expected: ["Mike (Car-North) drove 8km and earned $13 tips",
//           "Lisa (Bike-South) drove 2km and earned $4 tips",
//           "Tom (Car-North) drove 7km and earned $10 tips"]

const result = drivers.map((driver) => {
  const deliveryData = deliveries.filter(
    (delivery) => driver.id === delivery.driverId
  );
  const isDelivered = deliveryData.filter(
    (delivered) => delivered.status === "completed"
  );
  const totalDistance = isDelivered.reduce((sum, dis) => sum + dis.distance, 0);
  const totalTip = isDelivered.reduce((sum, ti) => sum + ti.tip, 0);
  return `${driver.name} (${
    driver.vehicle.charAt(0).toUpperCase() + driver.vehicle.slice(1)
  }-${
    driver.zone.charAt(0).toUpperCase() + driver.zone.slice(1)
  }) drove ${totalDistance}km and earned $${totalTip} tips`;
});

console.log(result);
