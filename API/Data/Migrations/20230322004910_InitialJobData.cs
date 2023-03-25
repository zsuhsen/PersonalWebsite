using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Data.Migrations
{
    /// <inheritdoc />
    public partial class InitialJobData : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.Sql($"INSERT INTO Companys VALUES" +
                $"('LRI','Afton','MN')," +
                $"('CPSI','Plymouth','MN')," +
                $"('Willdan','Minnetonka','MN')" +
                $";");

            migrationBuilder.Sql($"INSERT INTO Jobs VALUES" +
                $"(1,'05/01/2017','08/20/2018','Landscaping')," +
                $"(2,'01/06/2020','05/31/2022','First Big Job')," +
                $"(3,'06/06/2022',null, 'Second Job')" +
                $";");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.Sql($"DELETE FROM Jobs;");
            migrationBuilder.Sql($"DELETE FROM Companys;");
        }
    }
}
