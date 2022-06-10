using System.Data.SqlClient;
using parking_project.Models.Domain;

namespace parking_project.Models.Data
{
    public class VehicleDAO
    {
        private readonly IConfiguration _configuration;
        string connectionString;

        public VehicleDAO(IConfiguration configuration)
        {
            _configuration = configuration;
            connectionString = _configuration.GetConnectionString("DefaultConnection");
        }

        public int Insert(Vehicle vehicle)
        {
            int resultToReturn = 0;//it will save 1 or 0 depending on the result of insertion
            Exception? exception = new Exception();
            try
            {
                using (SqlConnection connection = new SqlConnection(connectionString))
                {
                    connection.Open();
                    SqlCommand command = new SqlCommand("InsertVehicle", connection);
                    command.CommandType = System.Data.CommandType.StoredProcedure;

                    command.Parameters.AddWithValue("@LicensePlate", vehicle.LicensePlate);
                    command.Parameters.AddWithValue("@CarBrand", vehicle.CarBrand);
                    command.Parameters.AddWithValue("@CarModel", vehicle.CarModel);
                    command.Parameters.AddWithValue("@Color", vehicle.Color);
                    command.Parameters.AddWithValue("@CategoryId", vehicle.VehicleCategory.Id);

                    resultToReturn = command.ExecuteNonQuery();
                    connection.Close();

                }
            }
            catch (Exception ex)
            {
                exception = ex;
                throw exception;
            }

            return resultToReturn;

        }

        public List<Vehicle> Get()
        {

            List<Vehicle> vehicles = new List<Vehicle>();
            using (SqlConnection connection = new SqlConnection(connectionString))
            {

                connection.Open();
                SqlCommand command = new SqlCommand("GetAllVehicles", connection);
                command.CommandType = System.Data.CommandType.StoredProcedure;

                SqlDataReader sqlDataReader = command.ExecuteReader();
                while (sqlDataReader.Read())
                {

                    vehicles.Add(new Vehicle
                    {
                        Id = Convert.ToInt32(sqlDataReader["Id"]),
                        LicensePlate = sqlDataReader["LicensePlate"].ToString(),
                        CarBrand = sqlDataReader["CarBrand"].ToString(),
                        CarModel = sqlDataReader["CarModel"].ToString(),
                        Color = sqlDataReader["Color"].ToString(),
                        VehicleCategory = new VehicleCategory(0, sqlDataReader["Name"].ToString())

                    });

                }

                connection.Close();

                return vehicles;

            }
        }

        public int Delete(int id)
        {
            int resultToReturn = 0;//it will save 1 or 0 depending on the result of insertion
            Exception? exception = new Exception();
            try
            {
                using (SqlConnection connection = new SqlConnection(connectionString))
                {

                    connection.Open();
                    SqlCommand command = new SqlCommand("DeleteVehicle", connection);
                    command.CommandType = System.Data.CommandType.StoredProcedure;

                    command.Parameters.AddWithValue("@Id", id);

                    resultToReturn = command.ExecuteNonQuery();
                    connection.Close();

                }
            }
            catch (Exception ex)
            {
                exception = ex;
                throw exception;
            }


            return resultToReturn;

        }

        public int Update(Vehicle vehicle)
        {
            int resultToReturn = 0;//it will save 1 or 0 depending on the result of insertion
            Exception? exception = new Exception();
            try
            {
                using (SqlConnection connection = new SqlConnection(connectionString))
                {

                    connection.Open();
                    SqlCommand command = new SqlCommand("UpdateVehicle", connection);
                    command.CommandType = System.Data.CommandType.StoredProcedure;

                    command.Parameters.AddWithValue("@Id", vehicle.Id);
                    command.Parameters.AddWithValue("@LicensePlate", vehicle.LicensePlate);
                    command.Parameters.AddWithValue("@CarBrand", vehicle.CarBrand);
                    command.Parameters.AddWithValue("@CarModel", vehicle.CarModel);
                    command.Parameters.AddWithValue("@Color", vehicle.Color);
                    command.Parameters.AddWithValue("@CategoryId", vehicle.VehicleCategory.Id);

                    resultToReturn = command.ExecuteNonQuery();
                    connection.Close();

                }
            }
            catch (Exception ex)
            {
                exception = ex;
                throw exception;
            }


            return resultToReturn;

        }

        public Vehicle GetById(int id)
        {
            Vehicle vehicle = new Vehicle();
            Exception? exception = new Exception();
            try
            {

                using (SqlConnection connection = new SqlConnection(connectionString))
                {

                    connection.Open();
                    SqlCommand command = new SqlCommand("GetVehicle", connection);
                    command.CommandType = System.Data.CommandType.StoredProcedure;
                    command.Parameters.AddWithValue("@Id", id);

                    SqlDataReader sqlDataReader = command.ExecuteReader();


                    if (sqlDataReader.Read())
                    {
                        vehicle.Id = Convert.ToInt32(sqlDataReader.GetInt32(0));
                        vehicle.LicensePlate = sqlDataReader.GetString(1);
                        vehicle.CarBrand = sqlDataReader.GetString(2);
                        vehicle.CarModel = sqlDataReader.GetString(3);
                        vehicle.Color = sqlDataReader.GetString(4);
                        vehicle.VehicleCategory = new VehicleCategory(Convert.ToInt32(sqlDataReader.GetInt32(5)), null);
                    }

                    connection.Close();

                    return vehicle;
                }
            }
            catch (Exception ex)
            {
                exception = ex;
                throw exception;
            }
        }
    }
}
