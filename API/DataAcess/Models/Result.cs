namespace DataAcess.Models
{
    public interface IResult<T> where T : new()
    {
        T Data { get; set; }
        bool Success { get; set; }
        string[]? Errors { get; set; }
    }

    public class Result<T> : IResult<T> where T : new()
    {
        public T Data { get; set; }
        public bool Success { get; set; }
        public string[]? Errors { get; set; }

        public Result() {
            this.Data = new T();
            this.Success = true;
            this.Errors = null;
        }
    }

    public static class ResultExtensions
    {
        public static IResult<T> ToResult<T>(this T model) where T : new()
        {
            return new Result<T>()
            {
                Data = model
            };
        }
    }
}
