namespace parking_project.Models.Domain
{
    public class Vehicle
    {
        private int id;
        private string licensePlate;
        private string carBrand;
        private string carModel;
        private string color;
        private VehicleCategory vehicleCategory;

        public Vehicle()
        {
        }

        public Vehicle(int id, string licensePlate, string carBrand, string carModel, string color, VehicleCategory vehicleCategory)
        {
            this.Id = id;
            this.LicensePlate = licensePlate;
            this.CarBrand = carBrand;
            this.CarModel = carModel;
            this.Color = color;
            this.VehicleCategory = vehicleCategory;
        }

        public int Id { get => id; set => id = value; }
        public string LicensePlate { get => licensePlate; set => licensePlate = value; }
        public string CarBrand { get => carBrand; set => carBrand = value; }
        public string CarModel { get => carModel; set => carModel = value; }
        public string Color { get => color; set => color = value; }
        public VehicleCategory VehicleCategory { get => vehicleCategory; set => vehicleCategory = value; }
    }
}
