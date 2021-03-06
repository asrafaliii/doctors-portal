import React from 'react';
import { useForm } from 'react-hook-form';
import {useQuery} from 'react-query';
import Loading from '../Shared/Loading';

const AddDoctor = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();

    const {data: services, isLoading} = useQuery('services', () => fetch('http://localhost:5000/service').then(res => res.json()))

    const onSubmit = async data =>{
        console.log("data", data);
    }

    if(isLoading){
        return <Loading></Loading>
    }

    return (
        <div>
            <h3 className='text-2xl'>Add Doctor</h3>
            <form onSubmit={handleSubmit(onSubmit)}>


<div className="form-control w-full max-w-xs">
<label className="label">
<span className="label-text">Name</span>

</label>
<input type="text" placeholder="Your Name" 
className="input input-bordered w-full max-w-xs" 
{...register("name", {
  required: {
    value: true,
    message: 'Name is Required'
  }
})}
/>
<label className="label">
{errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}

</label>
</div>
<div className="form-control w-full max-w-xs">
<label className="label">
<span className="label-text">Email</span>

</label>
<input type="Email" placeholder="Your Email" 
className="input input-bordered w-full max-w-xs" 
{...register("email", {
  required: {
    value: true,
    message: 'Email is Required'
  },
pattern: {
  value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
  message: 'Provide a valid Email' 
}
})}
/>
<label className="label">
{errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
{errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
</label>
</div>

<div className="form-control w-full max-w-xs">
<label className="label">
<span className="label-text">Specialty</span>
</label>
<select {...register('specialty')} class="select w-full max-w-xs">
    {
        services.map(service =><option
        key={service._id}
        value={service.name}
        >{service.name}</option>)
    }
</select>
</div>

<div className="form-control w-full max-w-xs">
<label className="label">
<span className="label-text">Photo</span>

</label>
<input type="file"
className="input input-bordered w-full max-w-xs" 
{...register("Image", {
  required: {
    value: true,
    message: 'Image is Required'
  }
})}
/>
<label className="label">
{errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}

</label>
</div>


  <input className='btn w-full max-w-xs text-white' type="submit" value="ADD" />
</form>
        </div>
    );
};

export default AddDoctor;