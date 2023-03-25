using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Data.Migrations
{
    /// <inheritdoc />
    public partial class InitialCreate : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.Sql($"CREATE TABLE Companys (" +
                $"Id int IDENTITY(1,1) PRIMARY KEY," +
                $"Name varchar(50) NOT NULL," +
                $"City varchar(50) NOT NULL," +
                $"State varchar(2) NOT NULL" +
                $");");

            migrationBuilder.Sql($"CREATE TABLE Jobs (" +
                $"Id int IDENTITY(1,1) PRIMARY KEY," +
                $"CompanyId int FOREIGN KEY REFERENCES Companys(Id)," +
                $"StartDate DATE NOT NULL," +
                $"EndDate DATE," +
                $"Description varchar(200)" +
                $");");

            /*
             migrationBuilder.CreateTable(
                name: "Companys",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    City = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    State = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Companys", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Jobs",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    CompanyId = table.Column<int>(type: "int", nullable: false),
                    StartDate = table.Column<DateTimeOffset>(type: "datetimeoffset", nullable: false),
                    EndDate = table.Column<DateTimeOffset>(type: "datetimeoffset", nullable: true),
                    Description = table.Column<string>(type: "nvarchar(200)", maxLength: 200, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Jobs", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Jobs_Companys_CompanyId",
                        column: x => x.CompanyId,
                        principalTable: "Companys",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Jobs_CompanyId",
                table: "Jobs",
                column: "CompanyId");*/

            migrationBuilder.Sql($"CREATE TABLE TechnicalToolTypes (" +
                $"Id int IDENTITY(1,1) PRIMARY KEY," +
                $"Name varchar(50) NOT NULL," +
                $"Description varchar(100)" +
                $");");

            migrationBuilder.Sql($"CREATE TABLE TechnicalTools (" +
                $"Id int IDENTITY(1,1) PRIMARY KEY," +
                $"ToolTypeId int FOREIGN KEY REFERENCES TechnicalToolTypes(Id)," +
                $"Name varchar(50) NOT NULL," +
                $"Description varchar(200)" +
                $");");

            migrationBuilder.Sql($"CREATE TABLE Schools (" +
                $"Id int IDENTITY(1,1) PRIMARY KEY," +
                $"Name varchar(50) NOT NULL," +
                $"City varchar(50) NOT NULL," +
                $"State varchar(2) NOT NULL" +
                $");");

            migrationBuilder.Sql($"CREATE TABLE Education (" +
                $"Id int IDENTITY(1,1) PRIMARY KEY," +
                $"SchoolId int FOREIGN KEY REFERENCES Schools(Id)," +
                $"Major varchar(100) NOT NULL," +
                $"Minor varchar(100) NOT NULL," +
                $"GradDate DATE" +
                $");");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.Sql($"DROP TABLE Jobs;");
            migrationBuilder.Sql($"DROP TABLE Companys;");
            migrationBuilder.Sql($"DROP TABLE TechnicalTools;");
            migrationBuilder.Sql($"DROP TABLE TechnicalToolTypes;");
            migrationBuilder.Sql($"DROP TABLE Education;");
            migrationBuilder.Sql($"DROP TABLE Schools;");
        }
    }
}
