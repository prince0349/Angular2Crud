using Newtonsoft.Json;
using SecondSample.DBContext;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Text;
using System.Web.Http;

namespace SecondSample.Controllers
{
    public class BaseAPIController : ApiController
    {
        protected readonly MVCMUSICSTOREEntities MusicStoreDB = new MVCMUSICSTOREEntities();
        protected HttpResponseMessage ToJson(dynamic obj)
        {
            var response = Request.CreateResponse(HttpStatusCode.OK);
            response.Content = new StringContent(JsonConvert.SerializeObject(obj), Encoding.UTF8, "application/json");
            return response;
        }
    }
}