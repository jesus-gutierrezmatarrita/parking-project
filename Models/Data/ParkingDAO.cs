﻿using parking_project.Models.Domain;
using System.Data.SqlClient;

namespace parking_project.Models.Data
{
    public class ParkingDAO
    {
        private readonly IConfiguration _configuration;
        string connectionString;

        public ParkingDAO(IConfiguration configuration)
        {
            _configuration = configuration;
            connectionString = _configuration.GetConnectionString("DefaultConnection");
        }

        public int Insert(Parking parking)
        {
            int resultToReturn = 0;//it will save 1 or 0 depending on the result of insertion
            Exception? exception = new Exception();
            try
            {
                using (SqlConnection connection = new SqlConnection(connectionString))
                {
                    connection.Open();
                    SqlCommand command = new SqlCommand("InsertParking", connection);
                    command.CommandType = System.Data.CommandType.StoredProcedure;

                    command.Parameters.AddWithValue("@Name", parking.Name);
                    command.Parameters.AddWithValue("@Location", parking.Location);
                    command.Parameters.AddWithValue("@Capacity", parking.Capacity);

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

        public List<Parking> Get()
        {

            List<Parking> customers = new List<Parking>();
            using (SqlConnection connection = new SqlConnection(connectionString))
            {

                connection.Open();
                SqlCommand command = new SqlCommand("GetAllParkings", connection);
                command.CommandType = System.Data.CommandType.StoredProcedure;

                SqlDataReader sqlDataReader = command.ExecuteReader();
                while (sqlDataReader.Read())
                {

                    customers.Add(new Parking
                    {
                        Id = Convert.ToInt32(sqlDataReader["Id"]),
                        Name = sqlDataReader["Name"].ToString(),
                        Location = sqlDataReader["Location"].ToString(),
                        Capacity = Convert.ToInt32(sqlDataReader["Capacity"])

                    });

                }

                connection.Close();

                return customers;

            }
        }
    }
}
