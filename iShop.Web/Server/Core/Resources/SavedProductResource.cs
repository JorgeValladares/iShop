﻿using System;
using System.Collections.Generic;

namespace iShop.Web.Server.Core.Resources
{
    public class SavedProductResource
    {
        public Guid Id { get; set; }
        public Guid InventoryId { get; set; }
        public Guid CartId { get; set; }
        public ICollection<Guid> OrderedItems { get; set; }
        public string Sku { get; set; }
        public string Name { get; set; }
        public double Price { get; set; }
        public string Summary { get; set; }
        public DateTime ExpiredDate { get; set; }
        public ICollection<Guid> Images { get; set; }
        public ICollection<Guid> Categories { get; set; }
    }
}