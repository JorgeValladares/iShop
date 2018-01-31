﻿using System;
using System.ComponentModel.DataAnnotations;
using iShop.Core.Helpers;

namespace iShop.Core.DTOs
{
    public class ShippingDto
    {
        public Guid Id { get; set; }
        [Required]
        public DateTime ShippingDate { get; set; }
        public ShippingState ShippingState { get; set; }
      
        [Required]
        public double Charge { get; set; }
        [Required]
        [StringLength(50)]
        public string Ward { get; set; }
        [Required]
        [StringLength(50)]
        public string District { get; set; }
        [Required]
        [StringLength(50)]
        public string City { get; set; }
        [Required]
        [StringLength(50)]
        public string PhoneNumber { get; set; }
        [Required]
        public string UserName { get; set; }
        public Guid OrderId { get; set; }
        public ShippingDto()
        {
            ShippingState = ShippingState.None;
        }
    }
}
