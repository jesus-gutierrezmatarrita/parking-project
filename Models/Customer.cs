using System;
using System.Collections.Generic;

namespace parking_project.Models
{
    public partial class Customer
    {

        private int id;
        private string name;
        private string lastname;
        private string password;
        private string email;
        private int phone;

        public Customer()
        {
            
        }

        public Customer(int id, string name, string lastname, string password,  string email, int phone)
        {
            this.Id = id;
            this.Name = name;
            this.Lastname = lastname;
            this.Password = password;
            this.Email = email;
            this.Phone = phone;
        }

        public int Id { get => id; set => id = value; }
        public string Name { get => name; set => name = value; }
        public string Lastname { get => lastname; set => lastname = value; }
        public string Password { get => password; set => password = value; }
        public string Email { get => email; set => email = value; }
        public int Phone { get => phone; set => phone = value; }

    }
}
