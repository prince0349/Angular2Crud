using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using SecondSample.DBContext;
using System.Data.Entity;

namespace SecondSample.Controllers
{
    public class AlbumAPIController : BaseAPIController
    {
        // GET api/<controller>
        public HttpResponseMessage Get()
        {
            return ToJson(MusicStoreDB.Albums.AsEnumerable());
        }

        // GET api/<controller>/5
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<controller>
        public HttpResponseMessage Post([FromBody] Album value)
        {
            MusicStoreDB.Albums.Add(value);
            return ToJson(MusicStoreDB.SaveChanges());
        }

        // PUT api/<controller>/5
        public HttpResponseMessage Put(int id, [FromBody]Album value)
        {
            MusicStoreDB.Entry(value).State = EntityState.Modified;
            return ToJson(MusicStoreDB.SaveChanges());
        }

        // DELETE api/<controller>/5
        public HttpResponseMessage Delete(int id)
        {
            MusicStoreDB.Albums.Remove(MusicStoreDB.Albums.FirstOrDefault(x => x.AlbumId == id));
            return ToJson(MusicStoreDB.SaveChanges());
        }
    }
}