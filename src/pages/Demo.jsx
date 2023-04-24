import { CodeBlock } from '../components'
// import { Box as Content, Box,} from 'atomic-library-core'
import { useState } from 'react'
import { BiBell } from 'react-icons/bi'
import { FiMail } from 'react-icons/fi'
import {
  Btn,
  BtnGroup,
  Checkbox,
  Radio,
  RadioGroup,
  Range,
  Switch,
  Avatar,
  AvatarGroup,
  Badge,
  Chip,
  ContentItem,
  Skeleton,
  Alert,
//   List,
  
//   Backdrop,
  
//   Accordion,
//   Navbar,
//   Link,
//   Collapse,
//   Slider
} from 'mui-clone'

const btnDemoStr = `
<Btn>default</Btn>
<Btn type='filled' subType='primary'>Click here</Btn>
<Btn type='ghost' subType='success'>Click here</Btn>
<Btn type='smooth' subType='danger'>Click here</Btn>
<Btn type='text' subType='secondary'>Click here</Btn>
`
const btnGroupStr = `
<BtnGroup>
    <Btn>Click here</Btn>
    <Btn type='ghost' subType='success'>
        Click here
    </Btn>
    <Btn type='smooth' subType='danger'>
        Click here
    </Btn>
    <Btn type='text' subType='secondary'>
        Click here
    </Btn>
</BtnGroup>
<BtnGroup fullRounded mT='10px' type='text' subType='success' >
    <Btn>Click here</Btn>
    <Btn>Click here</Btn>
    <Btn>Click here</Btn>
</BtnGroup>
`
const checkboxStr = `
<Checkbox />
<Checkbox defaultChecked />
<br />
<Checkbox disabled />
<Checkbox disabled checked />
<br />
<Checkbox label='label' />
<Checkbox>label</Checkbox>
<br />
<Checkbox subType='success' />
<Checkbox subType='danger' />
<br />
<Checkbox colorCheck='orange' />
<Checkbox colorCheck='brown' />
<br />
<Checkbox flowRowReverse>Terms</Checkbox>
`
const radioStr = `
<RadioGroup
value={radioValue}
onChange={(e) => setRadioValue(e.target.value)}
subType='success'
>
<Radio value='label 1' label='label 1' />
<Radio value='label 2'>label 2</Radio>
</RadioGroup>
`
const rangeStr = `
<Range /> <br />
<Range subType="success"/> <br />
<Range subType="warning"/> <br />
<Range min={-10} max={90} step={10}/> <br />
<Range min={-10} max={90} step={10} marks/>
`
const switchStr = `
<Switch />
<Switch subType='danger' label='hola' />
<Switch subType='dark' flowColumnReverse>Dark</Switch>
<Switch subType='dark' flowColumnReverse defaultChecked>Dark</Switch>
`
const avatarStr = `
<Avatar />
<Avatar>Dg</Avatar>
<Avatar src='https://exampleUrl.com/image' alt='Profile' />
<Avatar src='https://exampleUrl.com/broke' alt='Profile' />
<Avatar src='https://exampleUrl.com/broke' />
<Avatar bg='orange' h='60px' w='60px' />
<AvatarGroup max='4' childrenStyle={{ w: '50px', h: '50px' }}>
  <Avatar />
  <Avatar />
  <Avatar />
  <Avatar />
  <Avatar />
</AvatarGroup>
`
const badgeStr = `
<Badge badgeNumber={3}>
    <BiBell fontSize='1.5rem' />
</Badge>
<Badge badgeNumber={3} subType='success'>
    <BiBell fontSize='1.5rem' />
</Badge>
<Badge badgeNumber={100}>
    <BiBell fontSize='1.5rem' />
</Badge>
<Badge badgeContent={<BiBell fontSize='1rem' />}>
    <FiMail fontSize='1.5rem' />
</Badge>
<Badge vertical='bottom' badgeContent={<BiBell fontSize='1rem' />}>
    <FiMail fontSize='1.5rem' />
</Badge>
<Badge horizontal='left' badgeNumber={100}>
    <BiBell fontSize='1.5rem' />
</Badge>
<Badge badgeContent=' ' dot>
    <BiBell fontSize='1.5rem' />
</Badge>
`
const chipStr = `
<Chip>hola</Chip>
<Chip onClose={() => {}}>hola</Chip>
<Chip display={<Avatar h='20px' w='20px' />}>Profile</Chip>
<Chip subType='success'>hola</Chip>
<Chip subType='danger' type='filled' onClose={() => {}}>hola</Chip>
`
const alertStr = `
<Alert>this is a default Alert </Alert>
<Alert type='ghost'> Lorem ipsum dolor sit amet.</Alert>
<Alert type='ghost' subType='warning' fullRounded>
Lorem ipsum dolor sit amet.
</Alert>
<Alert type='smooth' subType='danger' rounded onClose={() => {}}>
  Lorem ipsum dolor sit amet.
</Alert>
`
const contentItem = `
<ContentItem
  display={<Avatar />}
  title='Anton Luk'
  content='photo taken by Anton Luk'
  rounded
  onClose={someFunction}
/>
`
const skeletonStr = `
<div  className='w-full max-w-[250px] m-auto'>
    <div  className='flex items-center'>
        <Skeleton h='50px' w='50px' br='25px' m='10px 0' />
        <div className='w-[120px] m-0'>
            <Skeleton m='10px 0' />
            <Skeleton m='10px 0' w='70px' />
        </div>
    </div>
    <Skeleton m='10px 0' />
    <Skeleton m='10px 0' />
    <Skeleton m='10px 0' h='150px' />
</div>
`
const Demo = () => {
  const [radioValue, setRadioValue] = useState('')
//   const [open, setOpen] = useState(false)
  return (
    <div className='w-full w-[90%] m-auto max-w-4xl'>
      <div className='p-12 px-8 flex flex-col gap-8'>
        <h1 className='title'>Mui Clone</h1>
        {/* <p>This is a quick demostration of the components.</p> */}
        <br />
        <h2 className='sub-title'>Btn: done</h2>
        <CodeBlock language='jsx' code={btnDemoStr}/>
        <div className="rounded-lg border p-4">
          <Btn>default</Btn>
          <Btn type='filled' subType='primary'>Click here</Btn>
          <Btn type='ghost' subType='success'>Click here</Btn>
          <Btn type='smooth' subType='danger'>Click here</Btn>
          <Btn type='text' subType='secondary'>Click here</Btn>
        </div>
        <h2 className='sub-title'>BtnGroup: done</h2>
        <CodeBlock language='jsx' code={btnGroupStr} />
        <div className="rounded-lg border p-4">
          <BtnGroup>
            <Btn type='filled' subType='primary'>Click here</Btn>
            <Btn type='ghost' subType='success'>Click here</Btn>
            <Btn type='smooth' subType='danger'>Click here</Btn>
            <Btn type='text' subType='secondary'>Click here</Btn>
          </BtnGroup>
          <BtnGroup mT='10px' type='text' fullRounded subType='success'>
            <Btn>Click here</Btn>
            <Btn>Click here</Btn>
            <Btn>Click here</Btn>
          </BtnGroup>
        </div>
        <h2 className='sub-title'>Checkbox: done</h2>
        <CodeBlock language='jsx' code={checkboxStr}/>
        <div className="rounded-lg border p-4">
          <Checkbox />
          <Checkbox defaultChecked />
          <br />
          <Checkbox disabled />
          <Checkbox disabled checked />
          <br />
          <Checkbox label='label' />
          <Checkbox>label</Checkbox>
          <br />
          <Checkbox subType='success' />
          <Checkbox subType='danger' />
          <br />
          <Checkbox colorCheck='orange' />
          <Checkbox colorCheck='brown' />
          <br />
          <Checkbox flowRowReverse>Terms</Checkbox>
        </div>
        <h2 className='sub-title'>Radio: done // RadioGroup: done</h2>
        <CodeBlock language='jsx' code={radioStr} />
        <div className="rounded-lg border p-4">
          <RadioGroup
            value={radioValue}
            onChange={(e) => setRadioValue(e.target.value)}
            subType='success'
          >
            <Radio value='label 1' label='label 1' />
            <Radio value='label 2'>label 2</Radio>
          </RadioGroup>
        </div>

        <h2 className='sub-title'>Range: in process</h2>
        <CodeBlock language='jsx' code={rangeStr} />
        <div className="rounded-lg border p-4">
          <Range /> <br />
          <Range subType='success' /> <br />
          <Range subType='warning' /> <br />
          <Range min={-10} max={90} step={10} /> <br />
          <Range min={-10} max={90} step={10} marks />
        </div>
        <h2 className='sub-title'>Switch: done</h2>
        <CodeBlock language='jsx' code={switchStr} />
        <div className="rounded-lg border p-4">
          <Switch />
          <Switch subType='danger' label='hola' />
          <Switch subType='dark' flowColumnReverse>
            Dark
          </Switch>
          <Switch subType='dark' flowColumnReverse defaultChecked>
            Dark
          </Switch>
        </div>
        <h2 className='sub-title'>Avatar: done // AvatarGroup: done</h2>
        <CodeBlock language='jsx' code={avatarStr}/>
        <div className="rounded-lg border p-4">
          <Avatar />
          <Avatar>Dg</Avatar>
          <Avatar
            src='https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            alt='Profile'
          />
          <Avatar src='https://exampleUrl.com/broke' alt='Profile' />
          <Avatar src='https://exampleUrl.com/broke' />
          <Avatar bg='orange' h='60px' w='60px' />
          <AvatarGroup max='4' childrenStyle={{ w: '50px', h: '50px' }}>
            <Avatar />
            <Avatar />
            <Avatar />
            <Avatar />
            <Avatar />
          </AvatarGroup>
        </div>

        <h2 className='sub-title'>Badge: done</h2>
        <CodeBlock language='jsx' code={badgeStr} />
        <div className="rounded-lg border p-4">
          <div className='flex gap-6'>
            <Badge badgeNumber={3}>
              <BiBell fontSize='1.5rem' />
            </Badge>
            <Badge badgeNumber={100} subType='success'>
              <BiBell fontSize='1.5rem' />
            </Badge>
            <Badge badgeContent={<BiBell fontSize='1rem' />}>
              <FiMail fontSize='1.5rem' />
            </Badge>
            <Badge vertical='bottom' badgeContent={<BiBell fontSize='1rem' />}>
              <FiMail fontSize='1.5rem' />
            </Badge>
            <Badge horizontal='left' badgeNumber={100}>
              <BiBell fontSize='1.5rem' />
            </Badge>
            <Badge badgeContent=' ' dot>
              <BiBell fontSize='1.5rem' />
            </Badge>
          </div>
        </div>
        <h2 className='sub-title'>Chip: done</h2>
        <CodeBlock language='jsx' code={chipStr}/>
        <div className="rounded-lg border p-4">
          <div  className='flex gap-5 items-center flex-wrap justify-center'>
            <Chip>hola</Chip>
            <Chip onClose={() => {}}>hola</Chip>
            <Chip display={<Avatar h='20px' w='20px' />}>Profile</Chip>
            <Chip subType='success'>hola</Chip>
            <Chip subType='danger' type='filled' onClose={() => {}}>
              hola
            </Chip>
          </div>
        </div>
        <h2 className='sub-title'>Alert: done</h2>
        <CodeBlock language='jsx' code={alertStr}/>
        <div className="rounded-lg border p-4">
          <Alert>this is a default Alert </Alert>
          <Alert type='ghost'> Lorem ipsum dolor sit amet.</Alert>
          <Alert type='ghost' subType='warning' fullRounded>
            Lorem ipsum dolor sit amet.
          </Alert>
          <Alert type='smooth' subType='danger' rounded onClose={() => {}}>
            Lorem ipsum dolor sit amet.
          </Alert>
        </div>
        <h2 className='sub-title'>List: done</h2>
        <h2 className='sub-title'>ContentItem: done</h2>
        <CodeBlock language='jsx' code={contentItem}/>
        <div className="rounded-lg border p-4">
          <ContentItem
            display={<Avatar />}
            title='Anton Luk'
            content='photo taken by Anton Luk'
            rounded
            onClose={() => {}}
          />
        </div>
        {/* <h3>Backdrop: done</h3>

        <CodeBlock
          language='jsx'
          code={`
<Btn onClick={() => setOpen(true)}>Open</Btn>

<Backdrop z='1000' open={open} onClick={() => setOpen(false)}>

  <Box
    shading={5}
    grid
    atomicClass={[
      '* * w:70vw mxH:90vh bg:#fff br:10px of:hidden',
      '* .image h:100% br:10px',
      '* .image>img h:100% w:100%',
      '* .image2 d:none h:70vh bg:#141414',
      '* .image2>img h:100% w:100% objectFit:contain',
      '* .content h:100% d:flex jc:space-between fxDit:column',
      '* .comments fs:1rem m:0 p:1.5rem bT:1px/ssolid/s#EDEDED',
      'lg * w:90vw',
      'md .image d:none',
      'md .content span:span/s2',
      'md .image2 d:block h:60vh'
    ]}
  >
    <Box className='image'>
      <img src='https://exampleUrl.com/image' />
    </Box>
    <Box className='content'>
      <ContentItem
        c='#676767'
        display={<Avatar />}
        title='Anton Luk'
        content='photo taken by Anton Luk'
        bBm='1px solid #EDEDED'
        onClose={() => setOpen(false)}
      />
      <Box className='image2'>
        <img src='https://exampleUrl.com/image'/>
      </Box>
      <Box className='comments'>Click outside...</Box>
    </Box>
  </Box>
 
</Backdrop>
          `}
        />
        <Result>
          <Btn onClick={() => setOpen(true)}>Open</Btn>
          <Backdrop z='1000' open={open} onClick={() => setOpen(false)}>
        
            <Box
              shading={5}
              grid
              atomicClass={[
                '* * w:70vw mxH:90vh bg:#fff br:10px of:hidden',
                '* .image h:100% br:10px',
                '* .image>img h:100% w:100%',
                '* .image2 d:none h:70vh bg:#141414',
                '* .image2>img h:100% w:100% objectFit:contain',
                '* .content h:100% d:flex jc:space-between fxDit:column',
                '* .comments fs:1rem m:0 p:1.5rem bT:1px/ssolid/s#EDEDED',
                'lg * w:90vw',
                'md .image d:none',
                'md .content span:span/s2',
                'md .image2 d:block h:60vh'
              ]}
            >
              <Box className='image'>
                <img
                  src='https://images.unsplash.com/photo-1652339710187-ac698792edcb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80'
                  alt=''
                />
              </Box>
              <Box className='content'>
                <ContentItem
                  c='#676767'
                  display={<Avatar />}
                  title='Anton Luk'
                  content='photo taken by Anton Luk'
                  bBm='1px solid #EDEDED'
                  onClose={() => setOpen(false)}
                />
                <Box className='image2'>
                  <img
                    src='https://images.unsplash.com/photo-1652339710187-ac698792edcb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80'
                    alt=''
                  />
                </Box>
                <Box className='comments'>Click outside...</Box>
              </Box>
            </Box>
       
          </Backdrop>
        </Result> */}
        <h2 className='sub-title'>Skeleton: done</h2>
        <CodeBlock language='jsx' code={skeletonStr}/>
        <div className="rounded-lg border p-4 ">
          <div  className='w-full max-w-[250px] m-auto'>
            <div  className='flex items-center'>
              <Skeleton h='50px' w='50px' br='25px' m='10px 0' />
              <div className='w-[120px] m-0'>
                <Skeleton m='10px 0' />
                <Skeleton m='10px 0' w='70px' />
              </div>
            </div>
            <Skeleton m='10px 0' />
            <Skeleton m='10px 0' />
            <Skeleton m='10px 0' h='150px' />
          </div>
        </div>
        <h2 className='sub-title'>Accordion: done</h2>
        <h2 className='sub-title'>Navbar: done</h2>
        <h2 className='sub-title'>Link: done</h2>

        <h2 className='sub-title'>Collapse: done</h2>
        <h2 className='sub-title'>Slider: done</h2>

      </div>
    </div>
  )
}
export default Demo
