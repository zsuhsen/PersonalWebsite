using DataAcess.Implementation;
using DataAcess.Models;

namespace API.Services
{
    public interface ICompanyService
    {
        IResult<List<Company>> Get();
        IResult<int> Create();
        IResult<Company> Update();
        IResult<bool> Delete();
    }

    public class CompanyService : ICompanyService
    {
        private readonly ICompanyDa _companyDa;
        public CompanyService(ICompanyDa companyDa)
        {
            _companyDa = companyDa;
        }

        public IResult<List<Company>> Get()
        {
            return _companyDa.Get().ToResult();
        }

        public IResult<int> Create()
        {
            return _companyDa.Create().ToResult();
        }

        public IResult<Company> Update()
        {
            return _companyDa.Update().ToResult();
        }

        public IResult<bool> Delete()
        {
            return _companyDa.Delete().ToResult();
        }
    }
}
