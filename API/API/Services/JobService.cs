using API.Models;
using DataAcess.Implementation;
using DataAcess.Models;

namespace API.Services
{
    public interface IJobService
    {
        IResult<List<Job>> Get();
        IResult<int> Create();
        IResult<Job> Update();
        IResult<bool> Delete();
    }

    public class JobService : IJobService
    {
        private readonly IJobDa _jobDa;
        public JobService(IJobDa jobDa)
        {
            _jobDa = jobDa;
        }

        public IResult<List<Job>> Get()
        {
            return _jobDa.Get().ToResult();
        }

        public IResult<int> Create()
        {
            return _jobDa.Create().ToResult();
        }

        public IResult<Job> Update()
        {
            return _jobDa.Update().ToResult();
        }

        public IResult<bool> Delete()
        {
            return _jobDa.Delete().ToResult();
        }
    }
}
