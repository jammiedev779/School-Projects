import IconJob from '../../Image/IconJob.png'
export default function PopularCard({value}) {
    return <>
        <div className='p-3 relative border-2 border-one w-40 h-40 flex flex-col items-center gap-y-5 justify-center rounded-md'>
            <div>
                <img className='w-20 h-20' src={"http://localhost:3000/images/job_categories_icons/" + value.icon} alt='' />
            </div>
            <div className='truncate hover:text-ellipsis text-center' style={{width: '8rem'}}>
                {value.job_name}
            </div>
        </div>
    </>
}