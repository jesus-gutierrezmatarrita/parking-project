namespace parking_project.Models.Domain
{
    public class Fare
    {
        private int id;
        private Parking parking;
        private string unitTime;
        private float price;
        private Vehicle vehicle;

        public Fare()
        {
            parking = new Parking();
            vehicle = new Vehicle();
        }

        public Fare(int id, Parking parking, string unitTime, float price, Vehicle vehicle)
        {
            this.id = id;
            this.parking = parking;
            this.unitTime = unitTime;
            this.price = price;
            this.vehicle = vehicle;
        }

        public int Id { get => id; set => id = value; }
        public Parking Parking { get => parking; set => parking = value; }
        public string UnitTime { get => unitTime; set => unitTime = value; }
        public float Price { get => price; set => price = value; }
        public Vehicle Vehicle { get => vehicle; set => vehicle = value; }
    }
}
