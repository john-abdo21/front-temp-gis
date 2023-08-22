import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Modal, Form, Input, Button, Row, Col, Divider, Collapse } from 'antd'
import Error from './Error'
import ButtonGlow from './ButtonGlow'
import { fetchFilter } from "../../features/filter/FilterSlice"
import { hide } from "../../features/filter/StateReducer"
import "../../features/filter/filter.module.css"

import ItemsToSearch from './Options/ItemsToSearch'

import ForestOptions from './Options/ForestOptions'
import RiverOptions from './Options/RiverOptions'
import LakeOptions from './Options/LakeOptions'
import TownOptions from './Options/TownOptions'



const OptionCard = () => {
  
  const [enabled, setEnabled] = useState(true)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const dispatch = useDispatch()
  const handleSubmit = (e) => {
    dispatch(fetchFilter(options))
    dispatch(hide())
    setIsModalOpen(false)
  }
  const loading = useSelector(state => state.filter.loading, [])
  const options = useSelector(state => state.options, [])
  const showModal = () => {
    setIsModalOpen(true)
  }
  const handleOk = () => {
    setIsModalOpen(false)
  }
  const handleCancel = () => {
    setIsModalOpen(false)
  }
  console.log('options',options)

  const items = [
    {
      key: '1',
      label: false ? 'Forest' : 'Forest (Unset)',
      children: <ForestOptions />,
    },
    {
      key: '2',
      label: false ? 'River' : 'River (Unset)',
      children: <RiverOptions />,
    },
    {
      key: '3',
      label: false ? 'Lake' : 'Lake (Unset)',
      children: <LakeOptions />,
    },
    {
      key: '4',
      label: false ? 'Town' : 'Town (Unset)',
      children: <TownOptions />,
    },
  ]

  return (
    <>
      <ButtonGlow onClick={showModal} />
      <Modal
        title="Search Options"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        className='option-modal'
        footer={[]}
      >
        <Form layout="vertical" onFinish={handleSubmit}>
          <Divider plain> <span><h5>- Land Feature -</h5></span> </Divider>
          <Row justify="center">
            <ItemsToSearch />
          </Row>

          <Divider plain> <span><h5>- Search Condition -</h5></span> </Divider>
          <Collapse items={items} bordered={false} />

          <Row justify="center">
            <Error />
          </Row>

          <Form.Item style={{ marginRight: '15px', marginBottom: '-10px', marginTop: '10px' }}>
            <Row justify="end">
              <Col>
                <Button type="primary" htmlType="submit">
                  Search
                </Button>
              </Col>
            </Row>
          </Form.Item>
        </Form>
      </Modal>
    </>
  )
}

export default OptionCard