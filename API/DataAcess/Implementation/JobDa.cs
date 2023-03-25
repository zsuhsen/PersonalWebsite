using AutoMapper;
using Data.DBContexts;
using Data.Models;
using DataAcess.Models;
using Microsoft.EntityFrameworkCore;

namespace DataAcess.Implementation
{
    public interface IJobDa
    {
        IResult<List<Job>> Get();
        IResult<int> Create();
        IResult<Job> Update();
        IResult<bool> Delete();
    }
    public class JobDa : IJobDa
    {
        private readonly ApiDbContext _dbContext;
        private readonly IMapper _mapper;
        public JobDa(ApiDbContext dbContext, IMapper mapper)
        {
            _dbContext = dbContext;
            _mapper = mapper;
        }

        public IResult<int> Create()
        {
            throw new NotImplementedException();
        }

        public IResult<bool> Delete()
        {
            throw new NotImplementedException();
        }

        public IResult<List<Job>> Get()
        {
            var jobEntities = _dbContext.Jobs?
                .Include(x => x.Company)
                .AsEnumerable()
                .ToList();

            var jobs = _mapper.Map<List<Job>>(jobEntities);

            return jobs.ToResult();
        }

        public IResult<Job> Update()
        {
            throw new NotImplementedException();
        }
    }
}
