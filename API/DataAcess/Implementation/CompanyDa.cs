using AutoMapper;
using Data.DBContexts;
using DataAcess.Models;

namespace DataAcess.Implementation
{
    public interface ICompanyDa
    {
        List<Company> Get();
        int Create();
        Company Update();
        bool Delete();
    }

    public class CompanyDa : ICompanyDa
    {
        private readonly ApiDbContext _dbContext;
        private readonly IMapper _mapper;
        public CompanyDa(ApiDbContext dbContext, IMapper mapper)
        {
            _dbContext = dbContext;
            _mapper = mapper;
        }

        public List<Company> Get()
        {
            var entities = _dbContext.Companys?
                .AsEnumerable()
                .ToList();

            var companies = _mapper.Map<List<Company>>(entities);

            return companies;
        }

        public int Create()
        {
            throw new NotImplementedException();
        }

        public bool Delete()
        {
            throw new NotImplementedException();
        }

        public Company Update()
        {
            throw new NotImplementedException();
        }
    }
}
